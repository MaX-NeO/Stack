import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import FaqSVG from '../../assets/ico/faq.webp';
import '../../assets/css/FAQ.css'
export const FAQ = () => {
    return (
        <div className='main'>
            <Navbar />
            <div className='etc-wrapper'>
                <div className='etc-container shadow'>
                    <h1 className='primary etc-title shadow'> Frequently Asked Questions </h1>
                    <img src={FaqSVG} alt="login-img" className='auth-svg' />
                    <span className='etc-datax'>

                        <div className="faq">
                            <input id="faq-a" type="checkbox" checked/>
                            <label htmlFor="faq-a">
                                <p className="faq-heading">App Sample Faq Question 1?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">You can purchase an individual account or a site license by emailing us at saMple generated One of our staff will be in touch shortly to set-up your account. We accept credit card, purchase order, or check. Learn more on our pricing page.<br /><br />We also offer professional development trainings that include the opportunity to pursue credit while also receiving a discounted license. If you have more questions, please feel free to submit a request!</p>
                            </label>
                            <input id="faq-b" type="checkbox" />
                            <label htmlFor="faq-b">
                                <p className="faq-heading">App Sample Faq Question 2?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Yes, we have professional development trainings available almost every month. staff can take our online course that will train you on the theory and practice of putting lessons online, often called flipped or blended learning. These trainings also include in depth instruction on how to use App.<br /><br />Online training start at 000, include a 0 year subscription App, and come with 0 hour of advancement credit available through sample State University or 00. For dates on upcoming trainings, email us at welcome@sample.com. If you have more questions, please feel free to submit a request!</p>
                            </label>
                            <input id="faq-c" type="checkbox" />
                            <label htmlFor="faq-c">
                                <p className="faq-heading">App Sample Faq Question 3?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Yes, App accepts purchase order for site licenses. Please set the PO, including a description of the order to welcome@App.com and we will invoice you for the amount. Once we send the invoice, someone will be in touch to set up your App account.<br /><br />You can learn more about our licensing structure on our pricing page. If you have more questions, please feel free to submit a request!</p>
                            </label>
                            <input id="faq-d" type="checkbox" />
                            <label htmlFor="faq-d">
                                <p className="faq-heading">App Sample Faq Question 4?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">To get setup with App, instructors will need a computer with working Internet connection and a web browser. <br /><br />Students will need any device with a web browser, ranging from smartphones to tablets and personal computer, as well as an Internet or cellular connection. <br /><br />For the be st experience, we recommend using the latest version of Google Chrome, but it should work on a recent version of any major browser. If you have any more questions, please feel free to submit a request! </p>
                            </label>
                            <input id="faq-e" type="checkbox" />
                            <label htmlFor="faq-e">
                                <p className="faq-heading">App Sample Faq Question 5?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Yes, you can add a PowerPoint to App. The easiest way is to record your PowerPoint presentation using a screen capture program like saMple generated  You can view our tutorial on how to do this here. <br /><br />This will allow you to record your PowerPoint as a video with your voice describing the slides. You will then be able to upload the video on App and create an interactive video lesson. If you have any more questions, please feel free to submit a request!</p>
                            </label>
                            <input id="settings" type="checkbox" />
                            <input id="faq-f" type="checkbox" />
                            <label htmlFor="faq-f">
                                <p className="faq-heading">App Sample Faq Question 6?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">If a student does not answer a question in 5 minutes after it pops up the student will be ‘timed out’ and they will lose their progress from the last previously answered question <br /><br />This feature is built in to discourage students from playing a video lesson and walking away. Students must stay engaged with the video lesson to avoid being timed out. If you have more questions, please feel free to submit a request!</p>
                            </label>
                        </div>

                        <br />
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}
