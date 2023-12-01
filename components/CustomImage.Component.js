import { Image } from 'react-native';

const getFileExtension = (name) => {
    return name?.split('.').pop();
  };

  const CustomImage = ({ name }) => {
    const IMAGES = {
      doc: {
        imgName: 'doc',
        uri: require('../assets/fileTypeOverview/doc.png'),
      },
      docx: {
        imgName: 'doc',
        uri: require('../assets/fileTypeOverview/doc.png'),
      },
      txt: {
        imgName: 'doc',
        uri: require('../assets/fileTypeOverview/doc.png'),
      },
      csv: {
        imgName: 'csv',
        uri: require('../assets/fileTypeOverview/csv.png'),
      },
      jpeg: {
        imgName: 'jpeg',
        uri: require('../assets/fileTypeOverview/jpeg.png'),
      },
      jpg: {
        imgName: 'jpg',
        uri: require('../assets/fileTypeOverview/jpg.png'),
      },
      pdf: {
        imgName: 'pdf',
        uri: require('../assets/fileTypeOverview/pdf.png'),
      },
      png: {
        imgName: 'png',
        uri: require('../assets/fileTypeOverview/png.png'),
      },
    };
    console.log(name)
    return (
      <Image
        source={IMAGES[getFileExtension(name)].uri}
        style={{ width: '100%', height: '100%' }}
      />
    );
  };

export default CustomImage