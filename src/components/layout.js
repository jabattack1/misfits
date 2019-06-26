//built-in component for appending elements to the <head> of the page
import Head from 'next/head';
//next-routes helper 
import Link from 'next/link';
//Visual primitives for the component age
import styled from 'styled-components';

const Wrapper = styled.div`
	margin:0 auto;
	width: 100vw;
	height: 100vh;
	background-image: url("https://i.imgur.com/xX7RvdC.png");
`
const Container = styled.div`
	position: absolute;
	background-color:#F2EEBC;
	padding:2em;
	width:300px;
	height:400px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%); /* IE 9 */
	-webkit-transform: translate(-50%, -50%); /* Chrome, Safari, Opera */
`

const Layout = (props) => (
	<div>
		<Head className='main'>
			<title>Misfits Market</title>
			<link rel='icon' type='image/png' href='https://i.imgur.com/nxMZvrg.png' />
		</Head>
		<Wrapper>
			<Container>
				{props.children}
			</Container>
		</Wrapper>
	</div>
);

export default Layout;
