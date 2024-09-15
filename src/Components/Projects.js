import React from 'react';
import Weather from "../Images/weather.jpeg";
import Recipe from "../Images/recepie.png";
import Downloader from "../Images/downloader.jpeg";
import Flipkart from "../Images/flipkart.png";
import Product_list from "../Images/product-list.png";
import Twitter from "../Images/twitter-u.png";

export default function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='proj_details'>
                <div className='weather_app'>
                    <img className='project_img' src={Weather} alt='Weather'/>
                    <div className='project_desc'>
                        <h2>Weather Application</h2>
                        <p>The Weather App is a user-friendly application built using HTML, CSS, and JavaScript, integrated with a weather API from RapidAPI. 
                            It provides users with real-time weather information for any city, along with the current date and time, 
                            ensuring quick and easy access to essential weather details.
                        </p>
                    </div>
                </div>
                <div className='recipe_app'>
                    <img className='project_img' src={Recipe} alt='Recipe'/>
                    <div className='project_desc'>
                        <h2>Recipe Search Web Application</h2>
                        <p>The Recipe Search Web Application is a sleek and easy-to-use tool developed with React.
                            Users can effortlessly search for recipes by specifying their desired dish. 
                            Powered by the Recipe by API-Ninjas, the app delivers real-time recipe results with comprehensive details. 
                            Utilizing React hooks and the Fetch API, it provides a smooth and interactive experience for exploring various recipes.
                        </p>
                    </div>
                </div>
                <div className='downloader_app'>
                    <img className='project_img' src={Downloader} alt='Downloader'/>
                    <div className='project_desc'>
                        <h2>Media Downloader Application</h2>
                        <p>The Media Downloader Application is a powerful and versatile tool designed for easy downloading of media content.
                            Built with HTML, CSS, and JavaScript, it allows users to download videos from popular platforms like YouTube, Facebook, and Instagram. 
                            The application offers a simple and efficient interface, making it accessible for users to grab their favorite media with just a few clicks.
                        </p>
                    </div>
                </div>
                <div className='flipkart_app'>
                    <img className='project_img' src={Flipkart} alt='Flipkart'/>
                    <div className='project_desc'>
                        <h2>Flipkart Static Design</h2>
                        <p>The Flipkart Static Design is a precise and visually accurate recreation of the Flipkart e-commerce platform, developed using React. 
                            While this project does not include backend functionality, it meticulously replicates the layout and design elements of the original site, offering a detailed static representation. 
                            This project demonstrates the use of React for crafting responsive and aesthetically consistent user interfaces, closely mirroring the look and feel of Flipkart.
                        </p>
                    </div>
                </div>
                <div className='flipkart_app'>
                    <img className='project_img' src={Product_list} alt='Product'/>
                    <div className='project_desc'>
                        <h2>Product list Application</h2>
                        <p>The Product List Application is a practical project built using React, designed to enhance understanding of working with JSON. 
                            It features a clean interface where users can view a list of products, demonstrating how to effectively handle and display JSON data within a React application. 
                            This project highlights the integration of JSON data to create a dynamic and responsive user experience.
                        </p>
                    </div>
                </div>
                <div className='twitter_app'>
                    <img className='project_img' src={Twitter} alt='Twitter'/>
                    <div className='project_desc'>
                        <h2>Twitter Login page (static)</h2>
                        <p>The Twitter Login Page (Static) is a precise and visually accurate recreation of the Twitter login interface, developed using HTML and CSS. 
                            This project focuses on replicating the design and layout of Twitter's login screen without backend functionality, providing a detailed static representation. 
                            It showcases skills in HTML and CSS for creating a user-friendly and visually appealing login page, closely mirroring Twitter’s original design.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
