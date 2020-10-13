import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}

export default Orphanage
