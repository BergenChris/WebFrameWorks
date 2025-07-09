import styles from "./App.module.css";

interface HeaderProps {
  profilePic: string;
  name:string;
  hoursAgo:number;
} 

const Header = ({profilePic,name,hoursAgo}: HeaderProps) => {
  return(
    
      <div className={styles.header}>
        <div className={styles.options}>
          <i className="fa fa-chevron-down"></i>
        </div>
        <img
          className={styles.co_logo}
          src={profilePic}
        />
        <div className={styles.co_name}>
          <a href="#">{name}</a>
        </div>
        <div className={styles.time}>
          <a href="#">{hoursAgo} hrs</a> · <i className="fa fa-globe"></i>
        </div>
      </div>
    
  )   
}
interface ContentProps{
  content: string;
  contentLink:string;
  image:string;
  imageTitle:string;
  imageDescription:string;
  imageLink:string;

}

const Content = ({content,contentLink,image,imageTitle,imageDescription,imageLink}:ContentProps) => {
  return(
    <>
    <div className={styles.content}>
          <p>
            {content}
          </p>
          <a href={contentLink}>{contentLink}</a>
        </div>

        <div className={styles.reference}>
          <img className={styles.reference_thumb} src={image} />
          <div className={styles.reference_content}>
            <div className={styles.reference_title}>
              {imageTitle}
            </div>
            <div className={styles.reference_subtitle}>
              {imageDescription}
            </div>
            <div className={styles.reference_font}>{imageLink}</div>
          </div>
        </div></>

  )
}

const SocialFooter = () => {
  return(
    <div className={styles.social}>
          <div className={styles.social_content}></div>
          <div className={styles.social_buttons}>
            <span>
              <i className="fa fa-thumbs-up"></i>Paws Up!
            </span>
            <span>
              <i className="fa fa-comment"></i>Meow-back
            </span>
            <span>
              <i className="fa fa-share"></i>Share the Cat-titude
            </span>
          </div>
        </div>
  )
}

interface CardProps{
  content: string;
  contentLink:string;
  image:string;
  imageTitle:string;
  imageDescription:string;
  imageLink:string;
  profilePic: string;
  name:string;
  hoursAgo:number;
}
const Card = ({content,contentLink,image,imageTitle,imageDescription,imageLink,profilePic,name,hoursAgo}:CardProps) => {
  return(
    <div className={styles.f_card}>
        <Header name={name} profilePic={profilePic} hoursAgo={hoursAgo}/>
        <Content 
          content={content}
          contentLink={contentLink}
          image={image}
          imageTitle={imageTitle}
          imageDescription={imageDescription}
          imageLink={imageLink}/>
        <SocialFooter/>
      </div>
  )
}

const App = () => {
  return (
    <>
      <Card  profilePic="https://picsum.photos/50" name="Persoon1" hoursAgo={1} content="lorem ipusim" contentLink="www.google.be" image="https://picsum.photos/200/300" imageDescription="boe" imageLink="" imageTitle="afb1"/>
      <Card  profilePic="https://picsum.photos/55" name="Persoon2" hoursAgo={3} content="test test" contentLink="www.google.com" image="https://picsum.photos/400/600" imageDescription="lelijk" imageLink="" imageTitle="af2" />
      <Card  profilePic="https://picsum.photos/51" name="Persoon1" hoursAgo={1} content="lorem ipusim" contentLink="www.google.be" image="https://picsum.photos/100/150" imageDescription="boe" imageLink="" imageTitle="afb1"/>
      <Card  profilePic="https://picsum.photos/52" name="Persoon2" hoursAgo={3} content="test test" contentLink="www.google.com" image="https://picsum.photos/300/450" imageDescription="lelijk" imageLink="" imageTitle="af2" />
    </>
  );
};

export default App;

