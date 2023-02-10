import React from 'react'
import Footer from './indexfooter'
import { Icon } from './iconos/styles/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Sobre nosotras</Footer.Title>
                    <Footer.Link href="#">Historia</Footer.Link>
                    <Footer.Link href="#">Nuestro compromiso</Footer.Link>
                    <Footer.Link href="#">Prensa</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Legal</Footer.Title>
                    <Footer.Link href="#">Politica de privacidad</Footer.Link>
                    <Footer.Link href="#">Cookies</Footer.Link>
                    <Footer.Link href="#">Condiciones generales de venta</Footer.Link>
                    <Footer.Link href="#">Envíos y devoluciones</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contacta</Footer.Title>
                    <Footer.Link href="#">Ayuda al usuario</Footer.Link>
                    <Footer.Link href="#">Empresas</Footer.Link>
                    <Footer.Link href="#">Publicidad</Footer.Link>
                    <Footer.Link href="#">Trabaja con nosotros</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Redes sociales</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}