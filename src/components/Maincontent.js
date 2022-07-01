import React from 'react'
import css from '../components css/Maincontent.css'
import gamingmouse from '../images/gamingmouse.jpg'
import laptop from '../images/laptop.jfif'
import desktop from '../images/desktop.jpg'
export default function Maincontent() {
  return (
    <>

        <div className="detailofh3">
            <h3>Have A Taste Of Our Product</h3>
        </div>


        <div className="detailofcontainer1">
          <h3>ROG Gaming Mouse</h3>
          </div>

        <div className="containerofimages">
        <div className="container1">
        <img src={gamingmouse} class="img-thumbnail" alt="..."/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis totam laborum laboriosam, quod commodi quia vel quis, magnam repudiandae quisquam quaerat. Nisi, similique eos veritatis blanditiis incidunt architecto deleniti ratione beatae labore tempora ipsam fugit et expedita, itaque veniam! Vero architecto atque numquam dolores possimus eius mollitia accusantium dolore rem aut. Exercitationem mollitia eligendi corporis nesciunt dolorem architecto sint, nostrum quia consectetur ut quasi aperiam aliquam quaerat culpa reiciendis error sed maxime consequuntur obcaecati aut, debitis earum nisi. Molestiae in hic quas placeat corporis ipsam voluptates porro. Esse eius harum suscipit atque praesentium. Similique dignissimos vel nisi maxime!</p>
        </div>

        <div className="detailofcontainer1">
          <h3 className='conh2'>ROG Gaming Laptop</h3>
          </div>
  
        <div className="container1 container2">
        <img src={laptop} class="img-thumbnail" alt="..."/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis totam laborum laboriosam, quod commodi quia vel quis, magnam repudiandae quisquam quaerat. Nisi, similique eos veritatis blanditiis incidunt architecto deleniti ratione beatae labore tempora ipsam fugit et expedita, itaque veniam! Vero architecto atque numquam dolores possimus eius mollitia accusantium dolore rem aut. Exercitationem mollitia eligendi corporis nesciunt dolorem architecto sint, nostrum quia consectetur ut quasi aperiam aliquam quaerat culpa reiciendis error sed maxime consequuntur obcaecati aut, debitis earum nisi. Molestiae in hic quas placeat corporis ipsam voluptates porro. Esse eius harum suscipit atque praesentium. Similique dignissimos vel nisi maxime!</p>
        </div>

        <div className="detailofcontainer1">
          <h3 className='conh2'>ROG Gaming Desktop</h3>
          </div>

        <div className="container1 con ">
        <img src={desktop} class="img-thumbnail" alt="..."/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis totam laborum laboriosam, quod commodi quia vel quis, magnam repudiandae quisquam quaerat. Nisi, similique eos veritatis blanditiis incidunt architecto deleniti ratione beatae labore tempora ipsam fugit et expedita, itaque veniam! Vero architecto atque numquam dolores possimus eius mollitia accusantium dolore rem aut. Exercitationem mollitia eligendi corporis nesciunt dolorem architecto sint, nostrum quia consectetur ut quasi aperiam aliquam quaerat culpa reiciendis error sed maxime consequuntur obcaecati aut, debitis earum nisi. Molestiae in hic quas placeat corporis ipsam voluptates porro. Esse eius harum suscipit atque praesentium. Similique dignissimos vel nisi maxime!</p>
        </div>
        </div>
    </>
  )
}
