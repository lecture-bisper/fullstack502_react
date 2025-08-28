/// Contact.jsx
/// Date: 25. 8. 28.
/// Time: 오후 12:41
/// User: it
/// 

function Contact(props) {
  return (
    <div className={'row my-5'} id={'contact'}>
      <div className={'col-md'}>
        {/* text */}
        <h1 className={''}>Contact</h1>
        <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater
          the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact
          us.</p>
        <p className={'text-success fs-5'}><strong>Catering Service, 42nd Living St, 43043 New York, NY</strong></p>
        <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a
          message here:</p>

        {/* UserInput */}
        <form action={''} className={'px-2'}>
          <div className={'my-3 border-bottom'}>
            <input type={'text'} className={'form-control-plaintext'} placeholder={'Name'}/>
          </div>
          <div className={'my-3 border-bottom'}>
            <input type={'number'} className={'form-control-plaintext'} min={'0'} max={'10'} placeholder={'How many people'}/>
          </div>
          <div className={'my-3 border-bottom'}>
            <input type={'datetime-local'} className={'form-control-plaintext'} placeholder={'Name'}/>
          </div>
          <div className={'my-3 border-bottom'}>
            <input type={'text'} className={'form-control-plaintext'} placeholder={'Message / Special requirements'}/>
          </div>
          <button type={'button'} className={'btn btn-secondary'}>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default Contact









