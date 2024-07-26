import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'About',
    description: (
      <>
        Reasoning Robustness to Adversarial Typo Attacks (R2ATA) is a
        specialized evaluation benchmark designed to assess the robustness of
        language models against adversarial typographical errors. R2ATA focuses
        on three common reasoning tasks: GSM8K, BBH, and MMLU. These tasks have
        been augmented with adversarial typos to create challenging test cases
        that expose vulnerabilities in model reasoning and comprehension.
      </>
    ),
    buttons: [
      {
        label: 'Check out our paper',
        link: 'https://github.com/spaceship-git',
      },
      { label: 'Explore our dataset', link: '/docs/intro' },
    ],
  },
  {
    title: 'Features',
    description: (
      <>
        Our R2ATA benchmark includes a diverse set of questions and prompts from
        mathematics, common sense, and multi-domain knowledge tasks, ensuring a
        comprehensive evaluation of language model capabilities. <br />
        The typos consists of Proximity Error, Double Typing Error, Omission Error, Whitespace Error.
      </>
    ),
    buttons: [
      { label: 'View our full dataset', link: 'https://huggingface.co/datasets/project-works/r2ata' },
    ],
  },
  {
    title: 'Easy Evaluation',
    description: (
      <>
        Our R2ATA benchmark provides a seamless, automated evaluation pipeline
        for assessing the robustness of language models against adversarial
        typographical errors. Users can integrate their models into our system,
        which automatically loads the R2ATA dataset and tests the models'
        performance under these challenging conditions.
      </>
    ),
    buttons: [
      // { label: 'Leaderboard', link: '/docs/leaderboard' },
      { label: 'Join Kaggle Competition', link: 'https://www.kaggle.com/competitions/r2ata' },
      // { label: 'Join Codalab Competition', link: 'https://www.kaggle.com/t/d1253e73fc784daa8b0a117fc877015f' },
      { label: 'Start Evaluation', link: 'https://github.com/esther-gan/R2ATA' },
    ],
  },
];

function Feature({ title, description, buttons }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={styles.justifyText}>{description}</p>
        <div className={styles.buttonContainer}>
          {buttons.map((button, index) => (
            <div key={index} className={styles.buttonWrapper}>
              {button.link.startsWith('http') ? (
                <a
                  className={clsx(
                    'button button--primary',
                    styles.customButton
                  )}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {button.label}
                </a>
              ) : (
                <Link
                  className={clsx(
                    'button button--primary',
                    styles.customButton
                  )}
                  to={button.link}
                >
                  {button.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
