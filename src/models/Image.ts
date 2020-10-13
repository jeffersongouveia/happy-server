import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import Orphanage from '@models/Orphanage'

@Entity('images')
class Image {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  path: string

  @ManyToOne(() => Orphanage, (orphanage) => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage
}

export default Image
