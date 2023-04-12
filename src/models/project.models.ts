export interface ProjectPhotoURL {
  id: number
  url: string
  alt: string
}

interface ProjectTestimony {
  comment: string
  photoURL: string
  name: string
  job: string
}

export interface Project {
  tag: string
  id: number
  title: string
  category: string
  description: string
  videoURL: string
  firstTitleTarget: string
  firstDescriptionTarget: string
  firstPhotosURL: ProjectPhotoURL[]
  testimony: ProjectTestimony
  secondTitleTarget: string
  secondDescriptionTarget: string
  secondPhotosURL: ProjectPhotoURL[]
}
