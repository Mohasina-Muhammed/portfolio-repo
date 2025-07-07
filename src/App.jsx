import { useState } from "react";
import {Github,Linkedin, Mail} from 'lucide-react';
import {Card,CardContent} from './components/card';
import {Button} from './components/button';

export default function Portfolio(){
  const [formData,setFormData]=useState({name:'',email:'',message:''});

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert('Form submitted successfully');
    setFormData({name:'',email:'',message:''});
  }
  
  const skills=['NodeJs','Express','MongoDB','React','JavaScript','Tailwind CSS','Linux','Apache','MySQL','PHP'];

  const projects=[
    {
      name:'Saas Style Admin Panel Project',
      description:'Registration and Login using JWT , Refresh Token System , Admin only routes , Protected frontend routes using React , UserManagement for with role editing (admin only)',
    },
    {
      name:'Login Project' ,
      description:'Registration and Login using JWT and Refresh Token System',
    },
    {
      name:'Traffic Signal Project' , 
      description:'Traffic Signal management using Socket.io',
    }
  ];

  return(
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-4 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold">Mohasina Muhammed</h1>
          <p className="text-lg text-blue-400">Full-Stack Developer</p>
          <p className="">Passionated self-learned MERN Stack Developer</p>
        </header>
        <section className="my-8">
          <h2 className="font-semibold text-2xl mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill)=>(
              <span key='skill' className="bg-white rounded-full text-sm px-3 py-1 shadow">{skill}</span>
            ))}
          </div>
        </section>
        <section className="my-8">
          <h2 className="font-semibold text-2xl">Projects</h2>
          <div className="grid gap-4">
            {projects.map((project)=>(
              <Card key='project.name'>
                <CardContent>
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="bg-white p-4 space-y-3 rounded-xl shadow">
            <input type='text' value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} 
            placeholder="Enter your name" className="w-full border p-2 rounded" required></input>
            <input type='email' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}
            placeholder="Enter your email" className="w-full p-2 rounded border" required></input>
            <textarea value={formData.message} onChange={(e)=>setFormData({...setFormData,message:e.target.value})}
            placeholder="Enter a message ..." className="w-full rounded border p-2" rows={4} required></textarea>
            <Button type='submit'>Send Message</Button>
          </form>
        </section>
        <footer className="text-center space-x-4 mt-8">
          <a href='https://github.com/Mohasina-Muhammed' target='_blank' rel="noopener noreferrer" className="inline-flex text-center gap-2"><Github size={18} /> </a>
          <a href="https://www.linkedin.com/Mohasina-Muhammed" target="_blank" rel='noopener noreferrer' className="inline-flex text-center gap-2"><Linkedin size={18} /></a>
          <a href='mail@example.com' className="inline-flex text-center"><Mail size={18} /> </a>
        </footer>
      </div>
    </div>
  )
}