import { Box, Heading, Input, Center } from "@chakra-ui/react"

export default function Chat() {
    return (
        <Center>
            <Box
                borderWidth="1px"
                borderColor="gray.700"
               borderRadius="md"
                p={6}
                w="80%"
                bg="black"
            >
                <Heading>I'm Luca's presenter</Heading>
                <Input placeholder="What's Luca's main stack?"/>
            </Box>
        </Center>
    );
}