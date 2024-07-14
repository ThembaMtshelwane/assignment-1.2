import './subscribe.css'

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <h3>Subscribe</h3>
      <form>
        <label htmlFor="call-to-action">Sign up for our newsletter</label>
        <input
          id="call-to-action"
          type="email"
          placeholder="Your email"
          required
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </section>
  )
}
export default SubscribeSection
