import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaLaptop, FaCertificate, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Flex maxW="1200px" mx="auto" align="center" direction={["column", "row"]}>
          <Box flex={1} pr={[0, 10]} mb={[10, 0]}>
            <Heading as="h1" size="2xl" mb={4}>
              Unlock Your Potential with Online Training
            </Heading>
            <Text fontSize="xl" mb={8}>
              Gain valuable skills and earn professional certifications from the comfort of your home.
            </Text>
            <Button colorScheme="blue" size="lg">
              Get Started
            </Button>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwwfHx8fDE3MTE5MTQxMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Online Learning" />
          </Box>
        </Flex>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8} maxW="1200px" mx="auto">
          <GridItem>
            <Icon as={FaLaptop} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Online Courses
            </Heading>
            <Text>Access a wide range of online courses taught by industry experts.</Text>
          </GridItem>
          <GridItem>
            <Icon as={FaCertificate} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Professional Certifications
            </Heading>
            <Text>Earn recognized certifications to boost your career prospects.</Text>
          </GridItem>
          <GridItem>
            <Icon as={FaUsers} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Expert Instructors
            </Heading>
            <Text>Learn from experienced instructors who are leaders in their fields.</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Popular Courses Section */}
      <Box bg="gray.100" py={20}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Popular Courses
        </Heading>
        <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8} maxW="1200px" mx="auto">
          <GridItem>
            <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
              <Image src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvdXJzZXxlbnwwfHx8fDE3MTE5MTQxMTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" borderRadius="md" mb={4} />
              <Heading as="h4" size="md" mb={2}>
                Web Development Bootcamp
              </Heading>
              <Text>Learn full-stack web development and build real-world projects.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
              <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGNvdXJzZXxlbnwwfHx8fDE3MTE5MTQxMTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Data Science" borderRadius="md" mb={4} />
              <Heading as="h4" size="md" mb={2}>
                Data Science Fundamentals
              </Heading>
              <Text>Gain foundational knowledge in data science and machine learning.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
              <Image src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY291cnNlfGVufDB8fHx8MTcxMTkxNDExM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Digital Marketing" borderRadius="md" mb={4} />
              <Heading as="h4" size="md" mb={2}>
                Digital Marketing Masterclass
              </Heading>
              <Text>Master digital marketing strategies and grow your online presence.</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box py={20}>
        <Stack spacing={8} align="center" maxW="600px" mx="auto" textAlign="center">
          <Heading as="h2" size="xl">
            Start Your Learning Journey Today
          </Heading>
          <Text fontSize="xl">Take the first step towards enhancing your skills and advancing your career.</Text>
          <Button colorScheme="blue" size="lg">
            Explore Courses
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
