import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import LogoSrc from '../../assets/logo/logo.png';

import Line from '../../components/line/line.component';
import Carousel from '../../components/carousel/carousel.component';
import TextArea from '../../components/text-area/text-area.component';
import Button from '../../components/button/button.component';

import {
  Container,
  Header,
  Logo,
  HeadingContainer,
  ContentContainer,
  Heading,
  RemoveButton,
  Form,
  ImagesInput,
  StyledImagesInput,
  InputContnetContainer,
  ImagesIcon,
  CarouselContainer,
} from './add-post.styles';

const AddPost = () => {
  const fileInputRef = useRef(null);
  const [previewData, setPreviewData] = useState([]);

  const onChangeHandler = (event) => {
    const files = event.target.files;
    setPreviewData(URL.createObjectURL(files[0]));

    console.log(URL.createObjectURL(files[0]));

    const newPreviewData = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewData(newPreviewData);
  };

  const onStyledInputClick = () => {
    fileInputRef.current.click();
  };

  const onRemoveBtnClick = () => {
    setPreviewData([]);
  };

  return (
    <Container>
      <ContentContainer>
        <Header>
          <Link to="/">
            <Logo src={LogoSrc} alt="ShareSphere Logo" />
          </Link>
          <Line />
        </Header>

        <Form>
          <HeadingContainer>
            <Heading>Add Post</Heading>
            {previewData.length > 0 && (
              <RemoveButton onClick={onRemoveBtnClick}>
                Remove Images
              </RemoveButton>
            )}
          </HeadingContainer>

          {previewData.length > 0 && (
            <CarouselContainer>
              <Carousel images={previewData} />
            </CarouselContainer>
          )}
          {previewData.length === 0 && (
            <>
              <ImagesInput
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={onChangeHandler}
              />
              <StyledImagesInput type="button" onClick={onStyledInputClick}>
                <InputContnetContainer>
                  <ImagesIcon />
                  <p>Click Here! To add images.</p>
                </InputContnetContainer>
              </StyledImagesInput>
            </>
          )}

          <TextArea label="Caption" name="caption" />
          <Button>Create Post</Button>
        </Form>
      </ContentContainer>
    </Container>
  );
};

export default AddPost;
