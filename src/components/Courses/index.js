import React from "react";
import Mipt from "../../images/courses/mipt.svg";
import Deeplearningai from "../../images/courses/deeplearningai.svg";
import Umich from "../../images/courses/umich.svg";
import Hse from "../../images/courses/hse.svg";
import Stanford from "../../images/courses/stanford.svg";
import Ods from "../../images/courses/ods.svg";
import * as styles from "./styles.module.scss";

const Courses = ({ lang = "en" }) => {
  if (lang === "en") {
    return (
      <div className={styles.coursesSectionWrapper}>
        <a href="https://www.coursera.org/account/accomplishments/specialization/BBTQSDXPTKCK">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>MIPT @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>6 courses</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Mipt}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Certified specialization in <strong>Machine Learning and Data Analysis</strong> offered by Moscow Institute of Physics and Technology (МФТИ) & Yandex
            </p>
            <p className={styles.courseInfo}>
              <span>Oct 2020</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Credential ID: <strong>BBTQSDXPTKCK</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/specialization/VWTSMYDC66TZ">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>UMich @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>5 courses</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Umich}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Certified specialization in <strong>applied Data Science</strong> offered by University of Michigan
            </p>
            <p className={styles.courseInfo}>
              <span>Sep 2020</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Credential ID: <strong>VWTSMYDC66TZ</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/specialization/TZY9XAAPRMXM">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>DL.AI @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>5 courses</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Deeplearningai}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Certified specialization in <strong>Deep Learning</strong> offered by DeepLearning.AI
            </p>
            <p className={styles.courseInfo}>
              <span>Jan 2021</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Credential ID: <strong>TZY9XAAPRMXM</strong></span>
            </p>
          </div>
        </a>

        <a href="https://blog.coursera.org/coursera-response-to-the-humanitarian-crisis-in-ukraine/">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>HSE @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>7 courses</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Hse}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Certified specialization in <strong>advanced Machine Learning</strong> offered by National Research University Higher School of Economics (ВШЭ)
            </p>
            <p className={styles.courseInfo}>
              <span>Dec 2022</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span><strong>Removed from Coursera</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/professional-certificates/tensorflow-in-practice">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>DL.AI @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>4 courses</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Deeplearningai}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Audited specialization in <strong>building AI apps with TensorFlow</strong> offered by DeepLearning.AI
            </p>
            <p className={styles.courseInfo}>
              <span>Dec 2023</span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/specializations/machine-learning-introduction">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>Stanford @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>3 courses</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Stanford}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Audited after Andrew Ng's classic course, a renewed specialization in <strong>Machine Learning</strong> offered by Stanford University & DeepLearning.AI
            </p>
            <p className={styles.courseInfo}>
              <span>Oct 2024</span>
            </p>
          </div>
        </a>

        <a href="https://github.com/girafe-ai/ml-course">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>MIPT @ girafe-ai</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>Single course</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Mipt}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Lectures and practices in <strong>Machine Learning</strong> provided by Moscow Institute of Physics and Technology (МФТИ)
            </p>
            <p className={styles.courseInfo}>
              <span>Spring semester 2020</span>
            </p>
          </div>
        </a>

        <a href="https://mlcourse.ai/book/index.html">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>mlcourse @ ODS</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>Single course</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Ods}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Free course on <strong>Machine Learning</strong> provided by OpenDataScience (ods.ai) community
            </p>
            <p className={styles.courseInfo}>
              <span>Jul 2023</span>
            </p>
          </div>
        </a>
      </div>
    );
  } else if (lang === "ru") {
    return (
      <div className={styles.coursesSectionWrapper}>
        <a href="https://www.coursera.org/account/accomplishments/specialization/BBTQSDXPTKCK">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>МФТИ @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>6 курсов</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Mipt}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Специализация с сертификатом по <strong>машинному обучению и анализу данных</strong> от Московского физико-технического института и Яндекса
            </p>
            <p className={styles.courseInfo}>
              <span>Окт 2020</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>ID сертификата: <strong>BBTQSDXPTKCK</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/specialization/VWTSMYDC66TZ">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>UMich @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>5 курсов</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Umich}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Специализация с сертификатом в области <strong>прикладной науки о данных</strong> от Мичиганского университета
            </p>
            <p className={styles.courseInfo}>
              <span>Сен 2020</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>ID сертификата: <strong>VWTSMYDC66TZ</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/specialization/TZY9XAAPRMXM">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>DL.AI @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>5 курсов</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Deeplearningai}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Специализация с сертификатом по <strong>глубокому обучению</strong> от DeepLearning.AI
            </p>
            <p className={styles.courseInfo}>
              <span>Янв 2021</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>ID сертификата: <strong>TZY9XAAPRMXM</strong></span>
            </p>
          </div>
        </a>

        <a href="https://blog.coursera.org/coursera-response-to-the-humanitarian-crisis-in-ukraine/">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>ВШЭ @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>7 курсов</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Hse}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Специализация с сертификатом по <strong>продвинутому машинному обучению</strong> от НИУ &laquo;Высшая школа экономики&raquo;
            </p>
            <p className={styles.courseInfo}>
              <span>Дек 2022</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span><strong>Удалено с Coursera</strong></span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/professional-certificates/tensorflow-in-practice">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>DL.AI @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>4 курса</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Deeplearningai}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Прослушанная специализация про <strong>TensorFlow-разработку</strong> от DeepLearning.AI
            </p>
            <p className={styles.courseInfo}>
              <span>Дек 2023</span>
            </p>
          </div>
        </a>

        <a href="https://www.coursera.org/specializations/machine-learning-introduction">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>Stanford @ Coursera</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>3 курса</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Stanford}
                className="noselect"
                alt="course_icon"
                class={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Прослушанная после классического курса Эндрю Ына, обновлённая специализация по <strong>машинному обучению</strong> от Стэнфордского университета и DeepLearning.AI
            </p>
            <p className={styles.courseInfo}>
              <span>Окт 2024</span>
            </p>
          </div>
        </a>

        <a href="https://github.com/girafe-ai/ml-course">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>МФТИ @ girafe-ai</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>Одиночный курс</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Mipt}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Лекции и практики по <strong>машинному обучению</strong> от Московского физико-технического института
            </p>
            <p className={styles.courseInfo}>
              <span>Весенний семестр 2020</span>
            </p>
          </div>
        </a>

        <a href="https://mlcourse.ai/book/index.html">
          <div className={styles.courseWrapper}>
            <span className={styles.title}>mlcourse @ ODS</span>
            <span className={styles.rightUpperCornerWrapper}>
              <span className={styles.numCourses}>Одиночный курс</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={Ods}
                class="noselect"
                alt="course_icon"
                className={styles.courseIcon}
              />
            </span>
            <p className={styles.courseDesc}>
              Бесплатный курс по <strong>машинному обучению</strong> от сообщества OpenDataScience (ods.ai)
            </p>
            <p className={styles.courseInfo}>
              <span>Июл 2023</span>
            </p>
          </div>
        </a>
      </div>
    );
  }
};

export default Courses;