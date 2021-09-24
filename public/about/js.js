const btn = document.getElementById('bootbtn')
const div = document.getElementById('btnclass')

btn.addEventListener('click', () => {
    const p = document.createElement('p')
    p.style = 'color: black; margin-right: 200px; margin-left: 200px;'
    p.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eum
    perferendis necessitatibus ipsa debitis. Quisquam temporibus aperiam
    incidunt perferendis fugit sed distinctio, dignissimos eligendi eius
    eveniet magnam qui numquam iste amet, voluptatum dolorem iusto, id
    inventore. Aut expedita quidem, ducimus error, porro tenetur voluptatem
    vel voluptates dolore ipsam aliquid nam exercitationem similique libero
    aliquam eos facere quibusdam doloribus enim excepturi reprehenderit
    voluptatum, illum dicta. Dolore iure explicabo est hic adipisci
    praesentium labore fuga facilis numquam quidem molestiae, blanditiis qui!
    Doloribus deserunt distinctio eum, eos pariatur necessitatibus neque eaque
    repellat quis tempore quas nesciunt, cum earum? Aperiam, quia excepturi?
    Tenetur, aliquam iste et earum maxime ullam. In at et magnam pariatur,
    itaque natus aut veniam vitae deserunt animi excepturi, aspernatur
    adipisci minima nesciunt placeat deleniti eum! Esse dolore, nemo eius,
    alias ea cum itaque ad dolores perspiciatis iste minima, ullam neque
    labore quibusdam laboriosam commodi eveniet laborum vero quidem? Non in,
    quidem minima ex quod nam culpa voluptates fugiat rem ducimus asperiores
    repellendus, omnis nulla unde delectus totam mollitia nemo. Iusto at
    aliquid magni laudantium illum, doloremque, repudiandae laboriosam
    voluptatem nam dolores veniam commodi iure et! Aperiam perferendis eaque
    libero tempora officia consectetur. Architecto mollitia illum reiciendis
    est perspiciatis ea quia!`
    btn.remove()
    div.insertAdjacentElement('afterbegin', p)
})