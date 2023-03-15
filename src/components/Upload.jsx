import { card } from "../assets";
import styles, { layout } from "../style";
import UploadBtn from "./UploadBtn";
import SubmitBtn from "./SubmitBtn";

const Upload = () => {
  return (
    <section className={`flex ${styles.flexStart} items-center md:items-start md:flex-row flex-col ${styles.paddingY}`}>

    <div className={`flex ${styles.flexStart} ${styles.paddingX} flex-col items-center`}>

      <img id="upload-img" src={card} alt="imageplaceholder" className="w-[100%] h-[100%] max-w-md" />
    
      <div className= {`flex flex-row mb-10`}>
    
        <div className="mr-10">
          <UploadBtn styles={`mt-10`} />
        </div>
        <div>
          <SubmitBtn styles={`mt-10`} />
        </div>
      </div>
      
    </div>

    <div className={`${styles.flexStart} ${styles.paddingX} flex-col`}>
      <h2 className={styles.heading2}>
        Results
      </h2>
      <p id="results" className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in neque ut risus bibendum aliquet. Aliquam viverra fringilla lectus eget vehicula. Mauris eu nibh sagittis, ornare purus sit amet, iaculis nisl. Cras laoreet nisi vel felis tincidunt porta. Sed ac lacus ut massa varius aliquet et nec ante. Sed facilisis, nibh vitae volutpat condimentum, lorem purus rutrum sem, ut gravida libero sapien eu massa. Proin pellentesque ultrices erat ut faucibus. Curabitur pretium semper nisl quis iaculis. In maximus urna ac mauris facilisis, et pretium nibh maximus. Proin elementum ex et efficitur viverra.

        Pellentesque eget quam nec risus pulvinar sollicitudin. Maecenas interdum nisi enim, eu tincidunt eros maximus id. In accumsan quam vel orci elementum viverra. Morbi eu feugiat dolor, non volutpat sem. Etiam urna dolor, laoreet sed accumsan suscipit, accumsan vitae dolor. Aliquam hendrerit nisi vel laoreet auctor. Mauris interdum tincidunt ligula, eu vehicula orci feugiat nec. Suspendisse bibendum ante nunc, non feugiat nisl rutrum at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur mollis tristique volutpat. Phasellus nisi nunc, venenatis ac leo eget, bibendum aliquet lorem. Phasellus finibus accumsan ligula pellentesque pulvinar. Vestibulum ultricies erat quis nibh semper, sit amet volutpat velit vestibulum.

        Ut eget tempor purus. Maecenas id turpis at massa faucibus volutpat. Vivamus tempus, orci vitae volutpat elementum, justo nibh sagittis sem, id ultricies sapien augue non erat. Curabitur tincidunt dolor non justo placerat, eget pulvinar lacus tristique. Proin placerat justo tortor, sit amet varius nisl varius nec. Aliquam erat volutpat. Sed dictum tellus nec commodo pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus molestie sed turpis nec tincidunt. Maecenas pretium magna ac lectus pretium fermentum.

        Vestibulum non varius nibh. Praesent laoreet, ex ac tincidunt efficitur, ex turpis rhoncus magna, eu rhoncus magna neque sit amet dui. Aenean malesuada interdum lorem, tempus dictum odio tempor vitae. Praesent tempus vestibulum justo lobortis tempus. Nunc quis eleifend libero. Quisque nec lacus nec nulla lobortis eleifend. Pellentesque scelerisque suscipit purus, quis aliquet leo tempus ut. In cursus tellus a justo sagittis porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

        Ut tempus ultrices venenatis. Integer volutpat magna ac cursus tristique. Praesent nibh metus, ornare nec elit ac, luctus molestie mi. Morbi blandit ligula ac imperdiet scelerisque. Ut sed mauris at ex vulputate placerat in a erat. Nunc commodo ex ac ipsum malesuada, non dictum ipsum tristique. Vestibulum leo metus, suscipit vel erat et, condimentum vestibulum eros. Vivamus id elit dui. Suspendisse eu odio malesuada, elementum urna a, rutrum leo. Proin faucibus sagittis arcu, nec iaculis libero lobortis eu. Cras feugiat sit amet justo ac tincidunt. Integer volutpat rutrum lacus lobortis sollicitudin.
      </p>

      
    </div>

    
  </section>
  )
}

export default Upload;