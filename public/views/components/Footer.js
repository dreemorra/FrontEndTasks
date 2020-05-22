let Footer = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <nav> </nav>
            <div id="footer-div">
                <a href="mailto:s.satturn@gmail.com">Bug report</a>
                <p>Mora, 2020</p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Footer;
