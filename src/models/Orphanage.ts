import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import Image from '../models/Image'

@Entity('orphanages')
class Orphanage {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  latitude: string

  @Column()
  longitude: string

  @Column()
  about: string

  @Column()
  instructions: string

  @Column()
  opening_hours: string

  @Column()
  open_on_weekends: boolean

  @OneToMany(() => Image, (image) => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[]
}

export default Orphanage
