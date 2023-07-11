import style from './aabout.module.css'

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.div}>
                <div className={style.divIm}>
                    <img className={style.img} src='https://scontent.fros10-1.fna.fbcdn.net/v/t39.30808-6/356112277_6496155513770092_6006082958775213658_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGv-TigaMUxVWC-Z_rHf7fctL10iveSYMu0vXSK95Jgy0KSFVgFNRLuCJizNkTDGliGqOaCnYZOVU0n7I9ve-kZ&_nc_ohc=Nt0UYbKzW-wAX9Mc91e&_nc_ht=scontent.fros10-1.fna&oh=00_AfBqrkw3kfOHse1wD-XQ1zjNwRn7Pwyg-K8KVXqLu_ePhg&oe=64A16A04' alt="" width='300px' />
                </div>
                    
                <div className={style.texto}>
                    <h1>ABOUT</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat tenetur, fuga optio accusamus ab perferendis sequi voluptate id, dicta harum alias deserunt ad nostrum debitis perspiciatis autem est nemo minima?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptatum dolore cumque aperiam voluptatem nam, debitis ab, sit ut possimus corporis aliquam eius non maxime illum. Dicta obcaecati aspernatur id.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid tempora quos sunt commodi, totam unde. Harum, culpa obcaecati veniam, placeat recusandae minima molestias odit modi eligendi nostrum distinctio aut!</p>
                </div>
            </div>
        </div>
    )
}

export default About