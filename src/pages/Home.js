import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Component/cart.css"
import { courses } from '../Component/CourseData';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Online Course Store</h1>
      <div className='image-corosole' >
        <Carousel className=' carousel-inner image-corosole'>
          <Carousel.Item>
            <img
              className="d-block image-size w-100"
              src="https://media.istockphoto.com/id/1391720692/photo/shot-of-a-group-of-kids-laying-on-the-floor-in-class.jpg?s=1024x1024&w=is&k=20&c=it_Hj_STQolXbaT86pPZ65ncvjX5Eb9fUUjzpaLY8Mk="
              alt="Software Development 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block image-size w-100"
              src="https://media.istockphoto.com/id/1224307038/photo/homeschool-asian-little-young-girl-learning-online-class-from-school-teacher-by-remote.jpg?s=1024x1024&w=is&k=20&c=_Elnsk0bzHsRR9aC0CDeO0PWif1kIFpz-uror7FOhKA="
              alt="Software Development 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block image-size  w-100"
              src="https://media.istockphoto.com/id/1302969455/photo/kid-interacting-during-online-class-by-showing-solved-problems-to-tutor-on-laptop-concept-of.jpg?s=1024x1024&w=is&k=20&c=rfSrvsjrV_4SWyQkUfkFhHDxcBOsCymG9z7pJSrded0="
              alt="Software Development 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block image-size  h-70 w-100"
              src="https://media.istockphoto.com/id/887938150/photo/answering-a-question.jpg?s=1024x1024&w=is&k=20&c=om0PUoYy4__7WEGKoKxyHiugL8T-bl_0e3aUvhR5BNk="
              alt="Software Development 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block image-size w-100"
              src="https://media.istockphoto.com/id/1483272796/photo/seminar-coding-talking.jpg?s=1024x1024&w=is&k=20&c=L7yKxE2ufFY1-plz5JtX_GnhQFJB4VaHbHYWQAP6WNk="
              alt="Software Development 2"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='image-div-home'>
        {courses.slice(0, 3).map((ele) => <div class="card text-bg-dark mr-div-home">
          <img src={ele.img} class="card-img image-corosole image-size" alt={ele.title} />
          <div class="card-img-overlay">
            <h5 class="card-title ">{ele.title}</h5>
            <p class="card-text image-p-home">{ele.description}</p>
            <p class="card-text "><small>Price:{ele.price}</small></p>
          </div>
        </div>)}
      </div>
    </div>
  )
};

export default Home;
