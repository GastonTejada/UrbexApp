import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const AboutUs = () => {
  return (
    <View>
      <Text  style= {styles.textTitle}>EMPRESA</Text>
      <Text  style= {styles.textParagraph}>
          El mundo de los negocios se ha convertido en un flujo vertiginoso y cambiante. Las empresas buscan nuevas herramientas para adaptarse a esta realidad.

          En un medio cada vez más competitivo, estar a la vanguardia en la gestión de información es la clave para marcar la diferencia y proyectarse en el tiempo.

          Desde hace dos décadas, el motor de trabajo en A&J Sistemas es crear herramientas flexibles que acompañen el crecimiento de las empresas.

          Quien nos elige, renueva nuestro compromiso de seguir innovando con soluciones tecnológicas para un futuro con horizonte propio.
      </Text>
      <Text  style= {styles.textTitle}>VISIÓN</Text>
      <Text  style= {styles.textParagraph}>
          Nos comprometemos a diario para ser referentes en desarrollo de software de alta calidad y
          proveedores de confianza de hardware, en pos de contribuir a una mejor calidad de vida en nuestra sociedad.
      </Text>
      <Text  style= {styles.textTitle}>MISIÓN</Text>
      <Text  style= {styles.textParagraph}>
          Brindamos soluciones tecnológicas para empresas, facilitando su operatividad y crecimiento.
          Ofrecemos una respuesta integral en entornos dinámicos y de fuerte impacto en las prácticas laborales.
      </Text>

    </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({
  textTitle: {
    color: colors.dark,
    fontSize: 25,    
    marginTop: 10,
    marginLeft: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  textParagraph: {
    color: 'black',
    fontSize: 15,    
    marginTop: 10,
    marginLeft: 15,       
    marginRight: 15,       
  },
})