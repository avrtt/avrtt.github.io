import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { mapData } from '../../data/exploration/temp.js';
import worldData from '../../geo/countries-110m.json'; 
import * as styles from "./styles.module.scss";

const VisitedCountriesMap = ({ isFlat, width=800, widthDivisor=2, height=600, heightDivisor=2, scale=100, marginLeft, marginRight }) => {
  const mapRef = useRef(null)

  useEffect(() => {
    d3.select(mapRef.current).selectAll('*').remove(); // remove any old svg if re-rendering

    const svg = d3 // create an <svg> inside our ref container
      .select(mapRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    if (isFlat) {
      const projection = d3
        .geoNaturalEarth1() // geoNaturalEarth1()
        .scale(scale)
        .translate([width / widthDivisor, height / heightDivisor])

      const pathGenerator = d3.geoPath().projection(projection)

      const features = worldData.features.filter(
        (f) => f.properties.iso_a2 !== 'AQ' // filter out Antarctica
      );

      svg // draw all countries
        .selectAll('path.country')
        .data(features)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', pathGenerator)
        .attr('fill', (d) =>
          mapData[d.properties.iso_a2] === 1 ? 'orange' : 'grey'
        )
        .attr('stroke', 'black')
        .attr('stroke-width', 0.5)

      return;
    }

    const projection = d3
      .geoOrthographic()
      .scale(270)
      .translate([width / 2, height / 2]) // center the globe in the middle of the svg
      .rotate([-30.3, -59.9]) // initial position (Saint Petersburg, ~ 30.3 E, 59.9 N)
      .clipAngle(90) // hide backside

    const pathGenerator = d3.geoPath().projection(projection);

    svg.style('background-color', '#f2f2f2');

    svg // draw the globe sphere
      .append('path')
      .datum({ type: 'Sphere' })
      .attr('d', pathGenerator)
      .attr('fill', '#d9d9d9')
      .attr('stroke', 'none');

    const graticule = d3.geoGraticule();

    svg // draw meridians and parallels
      .append('path')
      .datum(graticule)
      .attr('class', 'graticule')
      .attr('d', pathGenerator)
      .attr('fill', 'none')
      .attr('stroke', '#c9c9c9')
      .attr('stroke-width', 0.5);

    svg // draw countries
      .selectAll('path.country')
      .data(worldData.features)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('d', pathGenerator)
      .attr('fill', (d) =>
        mapData[d.properties.iso_a2] === 1 ? 'orange' : 'grey'
      )
      .attr('stroke', 'black')
      .attr('stroke-width', 0.4)

    let inertiaTimer;
    let velocity = [0, 0];
    const sensitivity = 0.18
      
    const drag = d3.drag() // "drag and rotate" behavior 
      .on('start', () => {
        if (inertiaTimer) inertiaTimer.stop(); // stop inertia if already in progress
      })
      .on('drag', (event) => { // update rotation based on the drag delta
        const currentRotate = projection.rotate()
        const newRotate = [
          currentRotate[0] + event.dx * sensitivity,
          currentRotate[1] - event.dy * sensitivity
        ];
        projection.rotate(newRotate);
        svg.selectAll('path').attr('d', pathGenerator)
    
        velocity = [event.dx * sensitivity, -event.dy * sensitivity] // store the velocity from this event (use the last dx/dy values)
      })
      .on('end', () => { // after drag ends, continue to update the rotation with a decaying velocity
        inertiaTimer = d3.timer(() => {
          velocity[0] *= 0.9; // apply friction to the velocity
          velocity[1] *= 0.9;
          const currentRotate = projection.rotate();
          projection.rotate([
            currentRotate[0] + velocity[0],
            currentRotate[1] + velocity[1]
          ]);
          svg.selectAll('path').attr('d', pathGenerator);
          if (Math.abs(velocity[0]) < 0.1 && Math.abs(velocity[1]) < 0.1) { // stop the timer when the velocity is very small
            inertiaTimer.stop();
          }
        });
      });

    svg.call(drag);

  }, [isFlat]);

  return <div ref={mapRef} className={styles.flatLayout} style={{ marginRight, marginLeft }} />;
};

export default VisitedCountriesMap;