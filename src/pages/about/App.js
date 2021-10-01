import "../../css/styles.css";
import CNNDiagramImage from "../../img/CNN_diagram.jpeg";
import DataAugImage from "../../img/data_aug_methods_combined.JPG";
import DatasetExampleImage from "../../img/dataset_example_images.JPG";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

const props = {
  home: "index.html",
  about: "#",
  contact: "contact.html",
};

function App() {
  return (
    <>
      <Navbar {...props} />
      <div className="flex flex-col items-center md:px-2 gap-y-3">
        <div className="shadow-2xl card bg-base-100 text-base-content">
          <div className="card-body">
            <h1 className="card-title">Gastrointestinal Cancer</h1>
            <p>
              Immunotherapy treatment is responsible for a significant reduction
              in cancer patient mortality and is a cornerstone of cancer therapy
              (Kather & et al, 2019, 1). However gastro-intestinal cancer
              patients tend not to benefit from the treatment, as other solid
              malignant tumor cancer patients might, unless the tumor belongs to
              the group Microsatellite Instable (MSI) (Kather & et al, 2019, 1).
              This group accounts for approximately 15% of gastric
              adreno-carcinomas and colorectal cancers, with the remaining 85%
              being Microsatellite Stable (MSS) tumors. Currently most
              gastro-intestinal cancer patients are not tested to determine if
              their tumor falls within the MSI group as to do so requires
              extensive immunohistochemistry and genetic analysis (Kather & et
              al, 2019, 1). The current process for patients to achieve a MSI
              cancer-type diagnosis (and immunotherapy treatment) requires
              extensive immunohistochemistry and genetic testing (Kather & et
              al, 2019). Furthermore, analysis of this testing is typically
              conducted by a human pathologist with domain expertise. These
              extra requirements and associated time delays reduce screening of
              patients for MSI-type cancer. Accordingly, a significant portion
              of the 15% of gastro-intestinal cancer patients may not be offered
              timely and potentially life-saving immunotherapy treatment (Kather
              & et al, 2019). We aim to develop an accurate model that can
              assist medical professionals in achieving MSI cancer diagnoses for
              patients. Thereby increasing access and use of critical
              immunotherapy treatments. This model will receive a haematoxylin
              and eosin (H&E) stained histology image tile. Convolutional Neural
              Networks (CNNs) such as VGGNet and ResNet will be used to extract
              relevant features from the cell microstructures present in the
              images. These structures are generally indistinguishable by the
              human eye. The features will then be fed through a classifier such
              as Fully-Connected Neural Network with Soft-Max Function, Decision
              Tree, Random Forest or Support Vector Machine. Returning a
              classification prediction for MSI and MSS-type cancer.
            </p>
          </div>
        </div>
        <div className="shadow-2xl card bg-base-100 text-base-content">
          <figure className="pt-4">
            <img src={CNNDiagramImage} alt="" className="object-contain h-36" />
            <figcaption className="py-2 italic font-light text-center">
              Figure 1: Convolution Neural Network architecture diagram (Saha,
              2018).
            </figcaption>
          </figure>
          <div className=" card-body">
            <h1 className="card-title">Deep learning</h1>
            <p>
              Deep learning models are generally more accurate than machine
              learning approaches when performing image classification
              (O'Mahony, 2019). This is partly due to deep learning’s ability to
              generalise when presented with new information and infer features
              from provided data (O'Mahony, 2019). Whereas machine learning
              approaches require developers to manually extract and weight
              relevant feature descriptors (Li et al., 2014, 844; O'Mahony,
              2019). Similarly, deep learning models are generally more accurate
              than human domain experts when classifying medical images. Neural
              networks distinct advantages arise from their ability to
              generalise solutions to different types of problems using similar
              designs (Li et al., 2014, 844). In image classification problems,
              image pixels within red, green and blue (RGB) channels can be used
              directly as input to standard feed-forward neural networks. The
              neural network learns the correct classification from this raw
              image pixel data. However, even small image tiles may contain
              thousands of pixels, resulting in very large numbers of
              connections between nodes and millions of weights to calculate (Li
              et al., 2014, 845). In contrast, CNN models combine weights into
              small kernel filters that dramatically simplifies the learning
              model. Focusing learning on features extracted by convolutions,
              rather than raw pixel data. CNN networks are a successful attempt
              to model humans’ visual cortex architecture using neural networks
              (Li et al., 2014, 844). They are much faster and more robust than
              traditional feed-forward neural networks (Li et al., 2014, 845).
              Consequently, research based on CNNs has significantly improved
              classification accuracy for image databases including the MNIST
              and NORB databases, and the CIFAR10 dataset (Li et al., 2014,
              844). A typical CNN consists of a series of connected blocks
              comprising convolutional, pooling and fully-connected layers
              enabling feature extraction and classification (Talo, 2019, 3)
              (see Figure 1). Different CNN architectures uniquely order and
              connect these blocks and layers to produce novel new learning
              capabilities. AlexNet, one of the first implementations of CNNs,
              comprises 11 layers: 5 convolutional layers, 3
              pooling/down-sampling layers and 3 fully-connected layers.
              VGGNet-16, another well-known CNN, has 13 convolutional layers, 5
              pooling/down-sampling layers and 3 fully-connected layers.
            </p>
          </div>
        </div>
        <div className="shadow-2xl card bg-base-100 text-base-content">
          <figure className="pt-4">
            <img
              src={DatasetExampleImage}
              alt=""
              className="object-contain h-36"
            />
            <figcaption className="py-2 italic font-light text-center">
              Figure 2: Example H&E stained tile images from proposed dataset
              (Kather, 2019)
            </figcaption>
          </figure>
          <div className=" card-body">
            <h1 className="card-title">Training dataset</h1>
            <p>
              The dataset contains approx. 192,000 224x244px tile images
              (Kather, 2019). Each image displays a Formalin-Fixed
              Paraffin-Embedded tissue sample originally captured as a Whole
              Slide Image (WSI) (Kather, 2019; Talo, 2019, 1). These WSIs have
              been cropped and split into tiles to reduce image size. As model
              size and memory requirements exponentially increase with image
              dimensions (Li et al., 2014, 845). These samples have been stained
              to reveal high-level structures and histologies (Kather, 2019;
              Talo, 2019, 1). The structures are generally analysed by
              pathologists for morphological characteristics (Talo, 2019, 1).
              With MSI classification depending on the presence of instability
              in these structures (Kather & et al, 2019). This dataset is
              therefore well-suited to CNN-type deep learning models (Li et al.,
              2014, 844).
            </p>
          </div>
        </div>
        <div className="shadow-2xl card bg-base-100 text-base-content">
          <figure className="pt-4">
            <img src={DataAugImage} alt="" className="object-contain h-36" />
            <figcaption className="py-2 italic font-light text-center">
              Figure 3: Data augmentation methods applied to melanoma tile
              images (Mikołajczyk & Grochowski, 2018).
            </figcaption>
          </figure>
          <div className=" card-body">
            <h1 className="card-title">Prediction methodology</h1>
            <p>
              Pre-processing is highly relevant to improving dataset robustness
              and model accuracy. For image classification tasks this generally
              involves colour normalisation, resizing, randomisation, and
              segregation. This dataset has been pre-processed prior to being
              made publicly available. The tile images have been colour
              normalised according to the Mackenko method (Kather, 2019, Macenko
              et al., 2009) - removing inconsistencies and bringing each WSI
              into a common normalised space (Macenko et al., 2009). The tile
              images have been resized to a common 244x244px dimension - a
              common default input dimension for many CNNs (Siu et al., 2018,
              4-5). The data has been segregated into two sets containing 70%
              training data and 30% test data. Images have been randomly
              assigned into these sets per patient, not per tile, preserving
              testing integrity (Kather, 2019). Finally, equilibration of
              training set data was achieved by randomly undersampling the
              MSS-type class which contained more image tiles than MSI-type
              (Kather, 2019). Various training approaches have been developed to
              balance pre-trained and custom CNNs trade-offs, including transfer
              learning and fine-tuning. The transfer learning technique involves
              ‘freezing’ the convolutional base and removing the pre-trained
              classification layers (Shin et al., 2016). The remaining
              convolutional layers are used as a feature extractor for the new
              classifier trained on our dataset (Talo, 2019, 3; Shin et al.,
              2016). For image classification tasks, the standard approach is to
              use a stack of fully-connected neural network layers followed by a
              Soft-Max activation layer (Marcelino, 2018). The Soft-Max layer
              outputs the probability distribution for the MSI and MSS-type
              cancer classes. Classification then occurs according to the most
              probable class (Marcelino, 2018). Using the transfer learning
              technique we may transfer the knowledge (i.e. weights) of the
              basic structures learned in the CNNs initial layers to the new
              classifier (Talo, 2019, 3; Shin et al., 2016). The essential
              structures that pre-trained CNN models have learned to identify
              different objects in databases such as ImageNet can be used to
              classify WSI histologies (Talo, 2019, 3; Shin et al., 2016). This
              technique therefore accelerates the training and development
              process for new CNN models and classification tasks. Given our
              dataset is quite large (with approx. 192,000 tile images) we may
              also choose to ‘unfreeze’ some convolutional layers in the
              pre-trained CNN during training (Marcelino, 2018). This process is
              referred to as fine-tuning the CNN model. Convolutional layers
              generally extract either low-level features that are generic and
              problem independent, and high-level features specific to the image
              classification problem (Mikołajczyk & Grochowski, 2018, 3). By
              unfreezing some of these layers, we can allow our CNN to learn the
              high-level features specific to our dataset. This affects the CNNs
              generalising capability but improves classification accuracy for
              our specific classes. Importantly however, we must be careful when
              adjusting the learning rate used in the unfrozen convolutional
              layers (Marcelino, 2018). The learning rate is a hyper-parameter
              controlling adjustment of weights within the CNN. When using a
              pre-trained CNN model it is beneficial to retain a small learning
              rate to prevent losing previous knowledge. Considering most
              pre-trained CNNs are trained on massive datasets, keeping a small
              learning rate will ensure that the CNNs useful pre-trained
              low-level feature extraction weights are not distorted too soon or
              too much during fine-tuning (Marcelino, 2018). Augmenting training
              datasets can improve CNNs classification accuracy (Mikołajczyk &
              Grochowski, 2018; Heidari et al., 2020; Taylor & Nitschke, 2017).
              Augmentation generally involves applying combinations of simple
              affine transformations such as rotation, reflection, shearing, and
              zooming to images (Mikołajczyk & Grochowski, 2018, 2). Geometric
              augmentations may also be used to broaden a dataset, though these
              are still the subject of research (Mikołajczyk & Grochowski, 2018,
              2). These augmentations include increasing image contrast, white
              balance, sharpening, and histogram equalisation (Mikołajczyk &
              Grochowski, 2018, 2). The total dataset is artificially inflated
              by these combined augmentations (Taylor & Nitschke, 2017). This
              improves CNNs ability to generalise against unseen data. Reducing
              the over-fitting effect that occurs during fine-tuning (Taylor &
              Nitschke, 2017).
            </p>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
}

export default App;
