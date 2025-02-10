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
      .attr('stroke-width', 0.4);

    const drag = d3 // drag to rotate behavior
      .drag()
      .on('drag', (event) => {
        const rotate = projection.rotate();
        const sensitivity = 0.3;
        const dx = event.dx;
        const dy = event.dy;
        const lambda = rotate[0] + dx * sensitivity; // update
        const phi = rotate[1] - dy * sensitivity;
        projection.rotate([lambda, phi]);
        svg.selectAll('path').attr('d', pathGenerator); // re-render everything
      });

    svg.call(drag);

  }, [isFlat]);

  return <div ref={mapRef} className={styles.flatLayout} style={{ marginRight, marginLeft }} />;
};

export default VisitedCountriesMap;