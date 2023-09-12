import React from 'react';

const Footer = () => {
    return (
        <div>
            <section class="bg-[#20262E]">
  <div class="grid md:grid-cols-6 px-5 md:px-20 pt-10 pb-5">
    <div class="col-span-2 ">
     <span class="font-mono bg-[#8BE8E5] px-3 py-0.5 text-black text-xl rounded-full">S</span>
     <span class="ml-2 font-semibold text-white">live.com</span>
      <div class="flex gap-10 mt-10 text-white">
        <i class="fa fa-facebook-f"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-twitter"></i>
      </div>
    </div>

    <div class="text-white mt-8 md:mt-0">
      <h2 class="text-[20px] font-Plus">Our Product</h2>
     <div class="text-[15px] mt-2">
      <p>Feature</p>
      <p>Smart Savings</p>
      <p>Investing</p>
      <p>Personal incurance</p>
      <p>Apps & download</p>
     </div>
    </div>

    <div class="text-white mt-8 md:mt-0">
      <h2 class="text-[20px] font-Plus">Top Feature</h2>
     <div class="text-[15px] mt-2">
      <p>Instant access</p>
      <p>Smart Savings</p>
      <p>Investing</p>
      <p>Personal incurance</p>
      <p>Apps & download</p>
     </div>
    </div>

    <div class="text-white mt-8 md:mt-0">
      <h2 class="text-[20px] font-Plus">Company</h2>
     <div class="text-[15px] mt-2">
      <p>About us</p>
      <p>Contact </p>
      <p>Caeer</p>
      <p>Personal incurance</p>
      <p>Apps & download</p>
     </div>
    </div>

    <div class="text-white mt-8 md:mt-0">
      <h2 class="text-[20px] font-Plus">Resources</h2>
     <div class="text-[15px] mt-2">
      <p>Blog</p>
      <p>Help & support</p>
      <p>Investing</p>
      <p>Personal incurance</p>
      <p>Apps & download</p>
     </div>
    </div>
  </div>
</section>


<section class="bg-black text-white">
  <div class="grid md:grid-cols-4 px-5 md:px-20 py-2">
    <div class="col-span-2"> 
      <p class="text-[25px]">	© <span class="text-[15px]">copyright @tik.mo 2023 All Right Reserved</span></p>
    </div>
    <div class="mt-2">
      <p>Terms and conditions</p>
    </div>
    <div class="mt-2">
      <p>Privacy and policy</p>
    </div>
  </div>
</section>
        </div>
    );
};

export default Footer;