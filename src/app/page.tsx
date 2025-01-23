import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import { Grid2 } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: 16,
        }}
      >
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                zIndex: -1, // Ensure the image is behind other content
              }}
            >
              <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
                Generate and Track Your QR Codes Effortlessly.
              </Typography>
              <Typography>
                Create custom QR codes, monitor their performance, and optimize your campaigns all in one place, with QRL PIXEL.
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                position: 'absolute',
                top: 50,
                right: 0,
                zIndex: -1, // Ensure the image is in front of other content
              }}
            >
              <Image src="/Hand.png" alt="QR Code" layout="intrinsic" width={500}
                height={300} objectFit="contain" />
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 container size={{ xs: 12, sm: 6 }} direction={'row'} spacing={2}>
            <Grid2 size={{ xs: 12, sm: 4 }} sx={{ alignSelf: 'flex-start', mt: 12 }}>
              <Image src="/iphone1.png" alt="QR Code" layout="intrinsic" width={500}
                height={300} objectFit="contain" />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }} sx={{ alignSelf: 'center', mb: 6 }}>
              <Image src="/iphone2.png" alt="QR Code" layout="intrinsic" width={500}
                height={300} objectFit="contain" />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }} sx={{ alignSelf: 'flex-end', mb: 10 }}>
              <Image src="/iphone3.png" alt="QR Code" layout="intrinsic" width={500}
                height={300} objectFit="contain" />
            </Grid2>
          </Grid2>
          <Grid2 size={6}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                zIndex: -1, // Ensure the image is behind other content
              }}
            >
              <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
                How QRL Pixel Works
              </Typography>
              <Typography>
                With QRL Pixel, you start by downloading the App on App signing up and creating an account. Next, you generate custom QR codes tailored to your needs. Once your QR codes are ready, you share them with your audience. Finally, you can track the scans and analyze the real-time data to gain insights.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 size={6}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                zIndex: -1, // Ensure the image is behind other content
              }}
            >
              <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
                How QRL Pixel Works
              </Typography>
              <Typography>
                With QRL Pixel, you start by downloading the App on App signing up and creating an account. Next, you generate custom QR codes tailored to your needs. Once your QR codes are ready, you share them with your audience. Finally, you can track the scans and analyze the real-time data to gain insights.
              </Typography>
            </Box>
          </Grid2>
          <Grid2 container size={{ xs: 12, sm: 6 }} direction={'column'} spacing={2}>
            <Grid2 sx={{ alignSelf: 'flex-center', textAlign: 'right' }}>
              <Image src="/Scanning.png" alt="QR Code" layout="intrinsic" width={500}
                height={300} objectFit="contain" />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 container rowSpacing={1} >
          <Grid2>
            <Box
              sx={{
                position: 'relative', // Adjust height as needed
                borderRadius: '10px',
                overflow: 'hidden',
                lineHeight: 0, // Remove the gap between the image and the overlay
              }}
            >
              <Image
                src="/scanning-qr.jpg"
                alt="QR Code"
                height={480}
                width={800}
                layout='responsive'
                // layout="fill"
                // objectFit="cover"
                quality={100}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid2 size={6}>
                    <Box
                      sx={{
                        position: 'relative',
                        zIndex: 1, // Ensure the content is in front of the overlay
                        color: 'white',
                        backgroundColor: 'rgba(25, 25, 112, 0.87)', // Overlay color with transparency
                        p: 4,
                        height: '100%',
                        borderRadius: '10px',
                      }}
                    >
                      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
                        Why you choose QRL Pixel
                      </Typography>
                      <Typography>
                        Choose QRL Pixel for its easy QR code generation, customizability with colors and logos, and advanced tracking features. Monitor scans in real-time, including location and device data, all within an intuitive, user-friendly interface. Perfect for businesses and marketers seeking efficient, insightful QR code management.
                      </Typography>
                    </Box>
                  </Grid2>
                </Grid2>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
        <ProTip />
        <Copyright />
      </Box>
    </Container >
  );
}