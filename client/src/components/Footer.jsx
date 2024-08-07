import React from 'react'

const Footer = () => {
  return (
    <footer class="flex flex-col p-10 space-y-8  mt-20 justify-center  bg-pink-100">

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a class="hover:text-gray-900" href="#">Shop</a>
        <a class="hover:text-gray-900" href="#">Men</a>
        <a class="hover:text-gray-900" href="#">Women</a>
        <a class="hover:text-gray-900" href="#">Kids</a>
       
    </nav>

    <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p class="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>
  )
}

export default Footer
