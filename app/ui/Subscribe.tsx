import { Button } from "."
import { palanquin } from "./fonts"

const Subscribe = () => {
  return (
    <section className="padding-x sm:py-32 py-16">
      <div
        className="max-container flex flex-col justify-center items-center gap-10"
        id="contact-us"
      >
        <h3
          className={`${palanquin.className} font-bold text-4xl text-center leading-[68px] max-md:text-3xl`}
        >
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 max-md:p-1 sm:border sm:border-slate-gray rounded-full">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="input"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="SignUp" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Subscribe
