import React from 'react'
import { Center, MainContainer, Right } from './FooterStyle'

export default function Footer() {
  return (
    <MainContainer>
        <Right>
            <i class="devicon-github-original"></i>
            <i class="devicon-linkedin-plain"></i>
            <i class="devicon-google-plain"></i>
        </Right>
        <Center>
            <p>®BDEV - 2022</p> 
        </Center>
    </MainContainer>
  )
}
