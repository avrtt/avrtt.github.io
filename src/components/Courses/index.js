import React from "react";
import Mipt from "../../images/courses/mipt.svg";
import Deeplearningai from "../../images/courses/deeplearningai.svg";
import Umich from "../../images/courses/umich.svg";
import Hse from "../../images/courses/hse.svg";
import Stanford from "../../images/courses/stanford.svg";
import Ods from "../../images/courses/ods.svg";

const titleStyle = {
  'font-weight': 'bold',
  'margin-left': '14px',
}; 

const numCoursesStyle = {
  'font-weight': 'lighter',
  'font-size': '18px',
  'float': 'right',
  'line-height': '46.5px',
}; 

const imgStyle = {
  'vertical-align': 'middle',
  'margin-right': '2px',
}; 

const descStyle = {
  'font-weight': 'lighter',
  'font-size': '18px',
  'margin-left': '14px',
  'margin-top': '42px',
  'width': '90%'
};

const infoStyle = {
  'font-weight': 'lighter',
  'font-size': '18px',
  'margin-left': '14px',
  'margin-top': '20px',
  'width': '90%'
}; 

const Courses = ({ lang="en" }) => {
  
  if (lang == "en") {
    return (
      <div class="coursesSectionWrapper">

        <a href="https://www.coursera.org/account/accomplishments/specialization/BBTQSDXPTKCK">
          <div class="courseWrapper">
            <span style={titleStyle}>MIPT @ Coursera</span>
            <span style={numCoursesStyle}>
              6 courses
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Mipt} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Certified specialization in <strong>Machine Learning and Data Analysis</strong> offered by Moscow Institute of Physics and Technology (МФТИ) & Yandex</p>
            <p style={infoStyle}>
              <span>Oct 2020</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Credential ID: <strong>BBTQSDXPTKCK</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/specialization/VWTSMYDC66TZ">
          <div class="courseWrapper">
            <span style={titleStyle}>UMich @ Coursera</span>
            <span style={numCoursesStyle}>
              5 courses
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Umich} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Certified specialization in <strong>applied Data Science</strong> offered by University of Michigan</p>
            <p style={infoStyle}>
              <span>Sep 2020</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Credential ID: <strong>VWTSMYDC66TZ</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/specialization/TZY9XAAPRMXM">
          <div class="courseWrapper">
            <span style={titleStyle}>DL.AI @ Coursera</span>
            <span style={numCoursesStyle}>
              5 courses
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Deeplearningai} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Certified specialization in <strong>Deep Learning</strong> offered by DeepLearning.AI</p>
            <p style={infoStyle}>
              <span>Jan 2021</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Credential ID: <strong>TZY9XAAPRMXM</strong></span>
            </p>
          </div>
        </a>

        <a href="https://blog.coursera.org/coursera-response-to-the-humanitarian-crisis-in-ukraine/">
          <div class="courseWrapper">
            <span style={titleStyle}>HSE @ Coursera</span>
            <span style={numCoursesStyle}>
              7 courses
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Hse} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Certified specialization in <strong>advanced Machine Learning</strong> offered by National Research University Higher School of Economics (ВШЭ)</p>
            <p style={infoStyle}>
              <span>Apr 2024</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span><strong>Removed from Coursera</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/professional-certificates/tensorflow-in-practice">
          <div class="courseWrapper">
            <span style={titleStyle}>DL.AI @ Coursera</span>
            <span style={numCoursesStyle}>
              4 courses
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Deeplearningai} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Audited specialization in <strong>building AI apps with TensorFlow</strong> offered by DeepLearning.AI</p>
            <p style={infoStyle}>
              <span>Dec 2023</span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/specializations/machine-learning-introduction">
          <div class="courseWrapper">
            <span style={titleStyle}>Stanford @ Coursera</span>
            <span style={numCoursesStyle}>
              3 courses
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Stanford} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Audited specialization in <strong>Machine Learning</strong> offered by Stanford University & DeepLearning.AI</p>
            <p style={infoStyle}>
              <span>May 2022</span>
            </p>
          </div>
        </a>

        <a href="https://github.com/girafe-ai/ml-course">
          <div class="courseWrapper">
            <span style={titleStyle}>MIPT @ girafe-ai</span>
            <span style={numCoursesStyle}>
              Single course
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Mipt} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Lectures and practices in <strong>Machine Learning</strong> provided by Moscow Institute of Physics and Technology (МФТИ)</p>
            <p style={infoStyle}>
              <span>Spring semester 2020</span>
            </p>
          </div>
        </a>

        <a href="https://mlcourse.ai/book/index.html">
          <div class="courseWrapper">
            <span style={titleStyle}>mlcourse @ ODS</span>
            <span style={numCoursesStyle}>
              Single course
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Ods} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Free course on <strong>Machine Learning</strong> provided by OpenDataScience (ods.ai) community</p>
            <p style={infoStyle}>
              <span>Jul 2023</span>
            </p>
          </div>
        </a>

      </div>
    )
  } 
  
  else if (lang="ru") {
    return (
      <div class="coursesSectionWrapper">

        <a href="https://www.coursera.org/account/accomplishments/specialization/BBTQSDXPTKCK">
          <div class="courseWrapper">
            <span style={titleStyle}>МФТИ @ Coursera</span>
            <span style={numCoursesStyle}>
              6 курсов
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Mipt} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Специализация с сертификатом по <strong>машинному обучению и анализу данных</strong> от Московского физико-технического института и Яндекса</p>
            <p style={infoStyle}>
              <span>Окт 2020</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>ID сертификата: <strong>BBTQSDXPTKCK</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/specialization/VWTSMYDC66TZ">
          <div class="courseWrapper">
            <span style={titleStyle}>UMich @ Coursera</span>
            <span style={numCoursesStyle}>
              5 курсов
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Umich} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Специализация с сертификатом в области <strong>прикладной науки о данных</strong> от Мичиганского университета</p>
            <p style={infoStyle}>
              <span>Сен 2020</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>ID сертификата: <strong>VWTSMYDC66TZ</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/specialization/TZY9XAAPRMXM">
          <div class="courseWrapper">
            <span style={titleStyle}>DL.AI @ Coursera</span>
            <span style={numCoursesStyle}>
              5 курсов
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Deeplearningai} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Специализация с сертификатом по <strong>глубокому обучению</strong> от DeepLearning.AI</p>
            <p style={infoStyle}>
              <span>Янв 2021</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>ID сертификата: <strong>TZY9XAAPRMXM</strong></span>
            </p>
          </div>
        </a>

        <a href="https://blog.coursera.org/coursera-response-to-the-humanitarian-crisis-in-ukraine/">
          <div class="courseWrapper">
            <span style={titleStyle}>ВШЭ @ Coursera</span>
            <span style={numCoursesStyle}>
              7 курсов
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Hse} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Специализация с сертификатом по <strong>продвинутому машинному обучению</strong> от НИУ «Высшая школа экономики»</p>
            <p style={infoStyle}>
              <span>Апр 2024</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span><strong>Удалено с Coursera</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/professional-certificates/tensorflow-in-practice">
          <div class="courseWrapper">
            <span style={titleStyle}>DL.AI @ Coursera</span>
            <span style={numCoursesStyle}>
              4 курса
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Deeplearningai} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Прослушанная специализация про <strong>TensorFlow-разработку</strong> от DeepLearning.AI</p>
            <p style={infoStyle}>
              <span>Дек 2023</span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/specializations/machine-learning-introduction">
          <div class="courseWrapper">
            <span style={titleStyle}>Stanford @ Coursera</span>
            <span style={numCoursesStyle}>
              3 курса
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Stanford} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Прослушанная специализация по <strong>машинному обучению</strong> от Стэнфордского университета и DeepLearning.AI</p>
            <p style={infoStyle}>
              <span>Май 2022</span>
            </p>
          </div>
        </a>

        <a href="https://github.com/girafe-ai/ml-course">
          <div class="courseWrapper">
            <span style={titleStyle}>МФТИ @ girafe-ai</span>
            <span style={numCoursesStyle}>
              Одиночный курс
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Mipt} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Лекции и практики по <strong>машинному обучению</strong> от Московского физико-технического института</p>
            <p style={infoStyle}>
              <span>Весенний семестр 2020</span>
            </p>
          </div>
        </a>

        <a href="https://mlcourse.ai/book/index.html">
          <div class="courseWrapper">
            <span style={titleStyle}>mlcourse @ ODS</span>
            <span style={numCoursesStyle}>
              Одиночный курс
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Ods} class="noselect" alt="course_icon" width="60" height="60" style={imgStyle} />
            </span>
            <p style={descStyle}>Бесплатный курс по <strong>машинному обучению</strong> от сообщества OpenDataScience (ods.ai)</p>
            <p style={infoStyle}>
              <span>Июл 2023</span>
            </p>
          </div>
        </a>

      </div>
    )
  }
};

export default Courses;


