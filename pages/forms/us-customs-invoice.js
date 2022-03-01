import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'

import { Form, Tab, Sonnet, Tabs, Button } from 'react-bootstrap'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function USCustomsInvoice({...props}) {
  
  const { watch, register, handleSubmit, formState: { errors, isValid }} = useForm({ mode: 'all'})

  const onSubmit = data => console.log(data)

  const Input = ({label, required, type, placeholder}) => (
    <Form.Group className="mb-3" controlId="">
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" {...register(label)}  id={label} />
    </Form.Group>
  )

  const ShipperFields = () =>(
    <section>
      <h3>Shippper</h3>
      <Input label="Name" required type="text"/>
      <Input label="Contact" required type="text"/>
      <Input label="Phone" required type="phone"/>
      <Input label="Address" required type="text"/>
    </section>
  )

  /** Group the Exporter input fields in a component */
  const ExporterFields = () => (
    <div>
      <section>
        <h3>Exporter</h3>
        <Input label="Name" required type="text"/>
        <Input label="Contact" required type="text"/>
        <Input label="Phone" required type="phone"/>
        <Input label="Address" required type="text"/>
      </section>
      <section>
        <h3>Other REF.NOS.</h3>
        <Input label="Name" required type="text"/>
      </section>
    </div>
  )

  /** Group the Consignee input fields in a component */
  const ConsigneeFields = () =>(
    <section >
      <h3>Consignee/Ship to Party Name</h3>
      <Input label="Phone" required type="number" placeholder=""/>
      <Input  label="Address" required type="text" placeholder="Street name, avenue, etc..."/>
      <Input label="IRS Number / EIN Number / Social Security Number - *mandatory for U.S. clearance" required type="number" placeholder=""/>
    </section>
  )

  const BuyerFields = () =>(
    <section >
      <h3>BUYER - IF OTHER THAN CONSIGNEE / SHIP TO PARTY</h3>
      <Input label="Phone" required type="number" placeholder=""/>
      <Input  label="Address" required type="text" placeholder="Street name, avenue, etc..."/>
      <Input label="IRS Number / EIN Number / Social Security Number - *mandatory for U.S. clearance" required type="number" placeholder=""/>
    </section>
  )

  /** Nnavigation between steps */
  const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
  const leftArrow  = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"
  
  const Navigation = () =>(
    <section>
      {
        step > 0 &&
      <Button type="button"  onClick={()=>{setStep(step-1)}}>
        <img src={leftArrow}/>
        BACK
      </Button>
      }
      {
        step === fieldGroups.length-1 && 
        <Button type="submit" disabled={!isValid}>
          <img src={rightArrow}/>
          SUBMIT
        </Button>
      }
      {
        step < fieldGroups.length-1 &&
        <Button type="button" disabled={!isValid} onClick={()=>{setStep(step+1)}}>
          <img src={rightArrow}/>
          NEXT
        </Button>
      }
    
    </section>
  )

  /** Mark the input group already filled as blue or gray if not */
  const Reference = () =>(
    <footer >
      {renderMarkers()}
    </footer>
  )
  
  function renderMarkers(){
    let markers = []
    for(let i=0; i<fieldGroups.length; i++)
      markers.push(<span key={i} />)
    return markers
  }

  const [step, setStep] = useState(0)

  const fieldGroups =[
    <ShipperFields/>,
    <ExporterFields/>,
    <ConsigneeFields/>,
    <BuyerFields/>
  ]

  return (
    <Layout>
      <Head>
        <title>US Customs Invoice(Multi Part)</title>
        <meta name="description" content="Complex Forms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h2>
          US Customs Invoice
        </h2>
    
         <form onSubmit={handleSubmit(onSubmit)}>
          {fieldGroups[step]}
          <Navigation/>
          <Reference/>
        </form>

        
       </main>
       {/* <div>state: { JSON.stringify(watch(), null, 2)}</div> */}
    </Layout>
  ) 
}



