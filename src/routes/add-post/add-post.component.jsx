import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import LogoSrc from '../../assets/logo/logo.png';

import Alert from '../../components/alert/alert.component';
import Line from '../../components/line/line.component';
import Carousel from '../../components/carousel/carousel.component';
import TextArea from '../../components/text-area/text-area.component';
import Button from '../../components/button/button.component';

import { selectToken } from '../../store/user/userSelector';
import { selectLoading } from '../../store/post/postSelector';
import { createPostAsync } from '../../store/post/postAction';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const loading = useSelector(selectLoading);
  const token = useSelector(selectToken);
  const [previewData, setPreviewData] = useState([]);
  const [images, setImages] = useState([]);
  const [caption, setCaption] = useState('');

  const onChangeHandler = (event) => {
    const files = event.target.files;

    const newPreviewData = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages(files);
    setPreviewData(newPreviewData);
  };

  const onStyledInputClick = () => {
    fileInputRef.current.click();
  };

  const onRemoveBtnClick = () => {
    setImages([]);
    setPreviewData([]);
  };

  const onCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const successHandler = () => {
    navigate('/profile');
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(createPostAsync(token, images, caption, successHandler));
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

        <Form onSubmit={onSubmitHandler}>
          <HeadingContainer>
            <Heading>Add Post</Heading>
            {previewData.length > 0 && (
              <RemoveButton onClick={onRemoveBtnClick}>
                Remove Images
              </RemoveButton>
            )}
          </HeadingContainer>

          <Alert />

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

          <TextArea
            label="Caption"
            name="caption"
            value={caption}
            onChangeHandler={onCaptionChange}
          />
          <Button type="submit" disabled={images.length === 0 || loading}>
            {loading ? <span>Creating Post</span> : <span>Create Post</span>}
          </Button>
        </Form>
      </ContentContainer>
    </Container>
  );
};

export default AddPost;
