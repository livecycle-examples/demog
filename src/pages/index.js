import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Img from "gatsby-image"
import "typeface-lato"
import "typeface-raleway"
import Header from "../components/header"
import intSepImage from "../images/int_sep.png" 

const PersonBox= ({title, children, image, clip})=>{
  return <div className="rounded-3xl border-4 border-lc-plum p-4 px-6 text-center m-4 max-w-xs mt-10">
    <Img  fixed={image} className="relative bg-white" style={{marginTop: -70, clipPath: clip, width: 239, height: 234}} />
    <div className="text-left">
    <h5 className="font-black mb-2 text-xl">{title}</h5>
    <div className="text-sm">{children}</div>
    </div>
  </div>
}

const Arrow = ({className})=> 
<div className={`${className} mx-4 mb-5`} style={{alignSelf: "flex-end", backgroundImage: `linear-gradient(to left,transparent,white),url(${intSepImage})`, width:88, height:12}}></div>

const ContactUs = ({className})=>{
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  if (submitted) {
    return <div>Thanks! We'll be in touch</div>
  } 
  return  <form className={`${className} text-black`} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={
    async (e)=> {
      e.preventDefault();
      const postData = {
        'form-name': e.target.getAttribute('name'),
        ...formData,
      }
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: Object.entries(postData)
        .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
        .join('&'),
      })
      setSubmitted(true)
      return false
    }  }>
      <p hidden><input name="bot-field" onChange={handleChange} /></p>
      <input type="email" name="email" required={true} onChange={handleChange} className="outline-none focus:border-lc-plum rounded-2xl mb-3 border-lc-grey border py-1 pl-3" placeholder="Your email"></input><button 

     type="submit" className="focus:outline-none bg-lc-plum border border-lc-plum text-white rounded-2xl py-1 px-4 sm:relative sm:inline-block block mx-auto sm:mx-0" style={{left:-30}}>Get Updates</button>
    </form>
}

const IndexPage = () => {
  const images = useStaticQuery(graphql`
  fragment jobBox on File {
    childImageSharp {
      fixed(width: 239, height: 234) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment integrationStep on File {
    childImageSharp {
      fixed(width: 80, height: 80) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  query {
    playgroundSample: file(relativePath: { eq: "playground-sample.png" }) {
      childImageSharp {
        fluid(maxWidth: 1108, quality:80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beta: file(relativePath: { eq: "beta.png" }) {
      ...jobBox
    }
    designer: file(relativePath: { eq: "designer.png" }) {
      childImageSharp {
        fixed(width: 60, height: 59) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pm: file(relativePath: { eq: "pm.png" }) {
      ...jobBox
    }
    gh: file(relativePath: { eq: "gh.png" }) {
      childImageSharp{
        fixed(width: 52, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    int_1: file(relativePath: { eq: "int_1.png" }) {
      ...integrationStep
    }
    int_2: file(relativePath: { eq: "int_2.png" }) {
      ...integrationStep
    }
    int_3: file(relativePath: { eq: "int_3.png" }) {
      ...integrationStep
    }
  }
  `)



  return <>
    <Header className="max-w-screen-xl mx-auto" />
    <main className="text-lg">
    <SEO title="Home" />
    <div className="text-center max-w-screen-xl m-auto p-4">
    <h1 className="mx-auto my-10" style={{lineHeight: 1.15}}>Instant product preview <br/>
        for remote collaboration</h1>
    <div className="my-5">
    No more context switching, and hectic ping-pong sessions with team <br/> 
    members and stakeholders. Share your progress during development. <br/>
     Get actionable feedback. Ship. Faster.
    </div>
    <div className="text-lc-grey mb-10">
    <p className="my-4">We’re nearly done with our Beta. Want to get early access?</p>
    <ContactUs/>
    </div>

    <section className="bg-black rounded-3xl pt-5 px-10 text-white">
        <h3 className="my-3 text-3xl font-black">Share an interactive environment in seconds</h3>
        <p className="mx-auto w-5/6 mb-8">
        Making your code playable in seconds, Allow team members and stakeholders to interact with and modify your product at their own time and place.
        </p>
        <Img className="mx-auto rounded-t-2xl" style={{maxWidth:1008 }} fluid={images.playgroundSample.childImageSharp.fluid} />
        <div>

        </div>
    </section>

    <section>
      <h3 className="text-3xl my-8 font-black">Gather feetback. From everyone. Before production.</h3>
      <p className="mx-auto w-5/6 mb-8">
      Using our personalized feedback tools, each team members can give their feedback the way they used to on top of your product
      </p>
      <div className="flex flex-row justify-center items-center">
        <PersonBox title="Designer" image={images.designer.childImageSharp.fixed}>
        Using our No Code CSS editor your designer can perform any wanted change to the UI and share with you the wanted outcome. When possible, you will get the updated code as a code suggestion to your repo.
        </PersonBox>
        <PersonBox title="Product manager" image={images.pm.childImageSharp.fixed} clip="polygon(64% 55%, 62% 13%, 35% 14%, 34% 38%, 0% 38%, 0% 100%, 100% 99%, 100% 10%, 73% 12%, 73% 57%)">
        Your product manager can check any wanted user flow or analytics behavior and make sure it works according to their spec file. If any issue if found, you’ll get anything you need to reproduce it in a click of a button
        </PersonBox>
        <PersonBox title="Beta customer" image={images.beta.childImageSharp.fixed} clip="polygon(63% 15%, 63% 5%, 30% 4%, 30% 25%, 14% 26%, 14% 91%, 86% 90%, 86% 15%)">
        Trying to get preliminary feedback from your beta customers? Streamline your user testing process automatically with no effort. Now your customers can share their opinions before the feature is released. Way before.
        </PersonBox>
      </div>
    </section>


    </div>
    <section className="my-10 text-center bg-lc-grey bg-opacity-10 py-12">
    <Img fixed={images.gh.childImageSharp.fixed} />
      <h3 className="text-3xl my-4 px-4">Streamline feedback and fix it</h3>
      <div className="mx-auto text-lg w-5/6">Don't let any feedback fall between the cracks. Gather everything with reproducible links and references in one place, for easy prioritization and execution.</div>
    </section>

    <section className="my-20 text-center mx-auto max-w-screen-xl p-4">
    <h3 className="text-3xl my-6">Hassle free integration</h3>
    <div className="flex w-full justify-between lg:flex-row flex-col">
      <div className="p-4">
        <Img fixed={images.int_1.childImageSharp.fixed} />
        <div>Connect to your repo</div>
      </div>
      <Arrow className="xl:block hidden" />
      <div className="p-4">
        <Img fixed={images.int_2.childImageSharp.fixed} />
        <div>Push your code</div>
      </div>
      <Arrow className="xl:block hidden" />
      <div className="p-4">
        <Img fixed={images.int_3.childImageSharp.fixed} />
        <div>Collaborate with your team</div>
      </div>
    </div>
    </section>


    <section className="text-center mx-auto px-4 max-w-screen-xl my-20" >
     <div className="p-6 text-lc-white" style={{
      background: "linear-gradient(42.82deg, #85008F 2.6%, #001C66 79.7%)",
      borderRadius: "40px"
    }}>
    <h3 className="font-black m-8 text-3xl">Help your team deliver. Faster. Remotely.</h3>
    <div className="my-6">We’re nearly done with our Beta. Get early access.</div>
    <ContactUs className="my-6" />
    </div>
    </section>
    
    </main>
    <footer className="text-center my-6">Copyright © 2020 livecycle. All rights reserved</footer>
    </>
}

export default IndexPage
