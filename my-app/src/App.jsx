import React from 'react';
import Buttons from './components/Buttons';
import Button from '@mui/material/Button';

import photo from './assets/photo.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import skill1 from './assets/skill1.png';
import skill2 from './assets/skill2.png';
import skill3 from './assets/skill3.png';
import skill4 from './assets/skill4.png';
import bro1 from './assets/bro1.png';
import bro2 from './assets/bro2.png';
import bro3 from './assets/bro3.png';

function App() {
  return (
    <div className='w-[100%]'>
        <header className='w-[100%]  flex flex-col space-y-5 justify-center md:grid-rows-2'>
            <nav className='grid text-center md:grid-cols-3 items-start'>
                <section className='flex items-center justify-center'>
                    <p className='text-[35px] text-[#939393]'>
                      <span className='text-black'>Brit</span>lex
                    </p>
                </section>
                <section className='grid  md:grid-cols-5 md:pt-[15px] text-[#263238]'>
                    <a href="" className='text-black pt-[5px]' >Home</a>
                    <a href="" className='text-black pt-[5px]' >Skills</a>
                    <a href="" className='text-black pt-[5px]' >About Us</a>
                    <a href="" className='text-black pt-[5px]' >Pricinge</a>
                    <a href="" className='text-black pt-[5px]' >Contacts</a>
                </section>
                <section className='flex justify-center items-center mt-[10px]'>
                    <Button sx={{border:'2px solid #263238', color:'#263238'}}>Outlined</Button>
                </section>
            </nav>
            <section className='w-[100%]  grid  md:grid-cols-2'>
                <section className=' text-center md:mt-[10vh] space-y-5 md:pl-[25vh] md:text-left'>
                    <p className='text-[50px] text-black font-semibold'>
                        Learn <br /> Any Foreign <br /> Language
                    </p>
                    <p className='text-[#8F95A5]'>
                        With our teachers who write a program for <br />
                        each student, you will be able to make your <br />
                        first sketch after the first lesson.
                    </p>
                    <Buttons title='Get started'/>
                </section>
                <section className='text-center md:text-left grid place-content-center md:place-content-center' >
                    <img src={photo} className='sm:w-[70%] ' />
                </section>
            </section>
        </header>
        <main className='w-[100%] grid gap-5'>
            <section className='grid-rows-2'>
                <section className='text-center text-[#000000] font-bold text-[30px] p-5 md:p-10 '>
                    Skills
                </section>
                <section className='md:flex flex-col text-center md:flex-row md:gap-5'>
                    <section className='pt-0 p-5 md:w-[30%] grid-rows-2 bg-[#F5F5F5]'>
                    <section>
                            <img src={skill1} alt="" />
                    </section>        
                      <section className='flex items-left flex-col p-5 space-y-5'>
                          <p className='font-bold text-[2em]'>Speaking</p>
                          <p className='text-[#8F95A5]'>
                            Improve your English skills and confidence. <br />
                            Live classes and interactive lessons online. <br />
                            20% extra free for a limited time only <br />
                          <br />  
                            Learn English online and improve your <br />
                            skills through our high-quality courses <br />
                            and resources - all designed for adult <br /> language learners. 
                          </p>
                          <section>
                          <Buttons title='Learn more'/>
                          </section>
                      </section>
                    </section>
                    
                    <section className='md:w-[70%] justify-center space-y-5 flex-row md:flex md:flex-col gap-5'>       
                        <section className='sm:flex justify-evenly gap-5'>
                            <section className=' flex md:w-[40%] flex-col space-y-5 justify-center items-center bg-[#F5F5F5]'>
                                <img src={skill2} />
                                <p className='font-bold text-[30px]'> Writing <br /></p>
                                <span className='text-[15px] font-normal text-[#8F95A5]'>
                                    One of the most important and extensive <br />
                                    areas of natural science, the science that <br />
                                    studies substances, also their composition
                                </span>   
                                <section>
                                  <Buttons title='Learn More'/>
                                </section>
                            </section>
                            <section className='bg-[#F5F5F5] flex flex-col space-y-5 justify-center items-center'>
                                <img src={skill3} alt="" />
                                
                                <p className='font-bold text-[30px]'> Reading <br /></p>
                                <span className='text-[15px] font-normal text-[#8F95A5]'>
                                    One of the most important and extensive <br />
                                    areas of natural science, the science that <br />
                                    studies substances, also their composition
                                </span>
                                
                                <section>
                                  <Buttons title='Learn More'/>
                                </section>
                            </section>
                        </section>
                 
                        <section className='sm:flex bg-[#F5F5F5] sm:justify-evenly'> 
                              <section className='flex space-y-4 flex-col justify-evenly'>
                                 <p className='font-bold text-[30px]'> Listening <br /></p>
                                <span className='text-[15px] font-normal text-[#8F95A5]'>
                                    One of the most important and extensive <br />
                                    areas of natural science, the science that <br />
                                    studies substances, also their composition
                                </span>
                                <section>
                                  <Buttons title='Learn More'/>
                                </section>
                              </section> 
                              <section className='flex justify-center items-center'>
                                  <img src={skill4} />
                              </section>  
                        </section>
                    </section>
                </section>
            </section>
           
            <section className='md:flex justify-around'>
                <section className='md:flex flex-col justify-center text-center space-y-10 items-center'>
                    <p className='text-[35px] font-bold'>About Us</p>
                    <p className='text-[#8F95A5]'>
                      The model offers a framework for discussing problems related <br />
                      to the user's experience, as well as possible ways and means of <br />
                      solving them. Application development begins at the top level <br />
                      (strategy), where the future software product is described quite <br />
                      abstractly from the point of view of the expectations of both <br />
                      users and the customer.
                    </p>
                    <p className='flex justify-evenly md:justify-around text-left'>
                        <span className='text-[30px] font-bold  md:px-10'>800</span>
                        <span className='text-[30px] font-bold  md:px-10'>18</span>
                        <span className='text-[30px] font-bold  md:px-10'>6</span>
                    </p>
                </section>
                <section className='flex'>
                    <img src={photo2} />
                </section>
            </section>

            <section className='md:flex flex-col space-y-5'>
                <section className='md:py-[5vh]'>
                  <p className='text-[35px] text-center font-bold'>Pricing</p>
                </section>
                <section className='md:flex justify-evenly'>
                    <section className='md:flex flex-col'>
                        <section>
                          <img src={bro1} alt="" />
                        </section>
                        <section className='text-center space-y-5'>
                            <p className='text-[25px] font-bold'>Self-study online course</p>
                            <p className='text-[#8F95A5]'>
                            Start learning English online in live classes <br />
                            with qualified EC teachers and students  <br />
                            from all over the world. 
                            </p>
                            <section className='bg-[#EEEEEE] rounded p-5'>
                              <p className='text-[20px]'><span className='font-bold'> £5.99 </span>  per month </p>
                            </section>
                        </section>
                    </section>
                    <section className='md:flex flex-col space-y-7'>
                        <section>
                          <img src={bro2} alt="" />
                        </section>
                        <section className='text-center space-y-5'>
                            <p className='text-[25px] font-bold'>Live online classes</p>
                            <p className='text-[#8F95A5]'>
                            Start learning English online in live classes <br />
                            with qualified EC teachers and students  <br />
                            from all over the world. 
                            </p>
                            <section className='bg-[#EEEEEE] rounded p-5'>
                              <p className='text-[20px]'><span className='font-bold'>  £12.99 </span>  per month </p>
                            </section>
                        </section>
                    </section>
                    <section className='md:flex flex-col'>
                        <section>
                          <img src={bro3} alt="" />
                        </section>
                        <section className='text-center space-y-3'>
                            <p className='text-[25px] font-bold'>Personal Tuition</p>
                            <p className='text-[#8F95A5]'>
                            Start learning English online in live classes <br />
                            with qualified EC teachers and students  <br />
                            from all over the world. 
                            </p>
                            <section className='bg-[#EEEEEE] rounded p-5'>
                              <p className='text-[20px]'><span className='font-bold'>  £20.99 </span>  per month </p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </main>
        <footer className='md:flex justify-evenly items-center space-y-5 mt-[5vh]'>
              <section>
                  <img src={photo3} alt="" />
              </section>
              <section className='space-y-8'>
                  <p className='text-[25px] font-bold'>Contact Us</p>
                  <p>Discover your current English level by taking our free online English test.Sign <br />
                  up to our newsletter for learning tips and free resources</p>
                  <section className='flex justify-around'>
                    <input type="text" placeholder='Enter Your E-mail' className='rounded py-[2vh] md:px-[10vh] border border-black' />
                    <Buttons title="Subscribe"/>
                  </section>
              </section>
              <section className=' border p-10vh'>
                    <hr className='w-[80%] text-black' />
              </section>
        </footer>
    </div>
  )
}

export default App