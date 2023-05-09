import { Container, Card, Button, Form } from 'react-bootstrap'

export const Cards = () => {
    return(
        <Container className='flex flex-row justify-center'>
          <Card className='w-5/12 border-2 mx-4'>
            <Card.Img variant="top" src="create.webp"/>
            <Card.Body className='justify-center align-middle'>
              <Button className="bg-sky-400 border-2 border-blue-600 w-full h-10">Create Room</Button>
            </Card.Body>
          </Card>
          <Card className='w-5/12 border-2 mx-4'>
            <Card.Img variant="top" src="join.webp" />
            <Card.Body className='justify-center align-middle'>
            <Form>
                {/* TODO: submit function */}
              <Form.Control className='w-full h-10' type="text" placeholder='Enter Room ID' />
            </Form>
            </Card.Body>
          </Card>
      </Container>
    )
}