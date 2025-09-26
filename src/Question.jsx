import React from 'react';

const Question = () => {
    return (
        <div className='bg-[#210333] pt-[50px] md:pt-[148px] pb-[128px] px-5 md:px-[175px]'>
            <h3 className='font-semibold text-[40px] md:text-[60px] text-[#fff] mb-[30px] md:mb-[143px] text-center md:text-left'>Frequently Asked Questions</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                <div>
                    <h3 className='font-extrabold text-[24px] text-[#fff]'>What is NexMail AI?</h3>
                    <p className='mt-6 mb-6 font-semibold text-[20px] text-[rgba(255,255,255,0.75)]'>NexMail AI is an AI-powered tool that helps you generate professional, personalized emails in seconds — just from a simple prompt.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-[24px] text-[#fff]'>Who can use NexMail AI?</h3>
                    <p className='mt-6 mb-6 font-semibold text-[20px] text-[rgba(255,255,255,0.75)]'>Anyone! Whether you're a student, freelancer, marketer, startup founder, or corporate professional — NexMail AI is designed for anyone who needs to send better emails, faster.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-[24px] text-[#fff]'>Is it only for cold emails?</h3>
                    <p className='mt-6 mb-6 font-semibold text-[20px] text-[rgba(255,255,255,0.75)]'>No. While it’s great for cold outreach, you can use NexMail AI for follow-ups, replies, job applications, marketing emails, and more.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-[24px] text-[#fff]'> Do I need any technical skills to use it?</h3>
                    <p className='mt-6 mb-6 font-semibold text-[20px] text-[rgba(255,255,255,0.75)]'>Not at all. NexMail AI is built to be beginner-friendly. If you can type your idea, you can generate a full email — no setup or writing experience needed.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-[24px] text-[#fff]'> Can I customize the email tone and style?</h3>
                    <p className='mt-6 mb-6 font-semibold text-[20px] text-[rgba(255,255,255,0.75)]'>Yes. You can choose from multiple tones like formal, friendly, persuasive, or neutral, and even fine-tune the message after generation.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-[24px] text-[#fff]'>Is NexMail AI free to use?</h3>
                    <p className='mt-6 mb-6 font-semibold text-[20px] text-[rgba(255,255,255,0.75)]'>We offer a free version with limited email generations. For advanced features and unlimited access, you can upgrade to a premium plan.</p>
                </div>
            </div>
            <h3 className='mt-[40px] md:mt-[90px] font-semibold text-[16px] text-center text-[rgba(255,255,255,0.75)]'>Didn’t find your answer? <a href="#" className='text-[#98a0ff]'>Contact us here</a></h3>
        </div>
    );
};

export default Question;