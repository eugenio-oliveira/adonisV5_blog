import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'


export default class PostsController {

  public async index() {

    const posts = await Post.all()

    return posts

  }

  public async show(){

    const post = await Post.find(1)

    return post

  }


  public async create({ request }: HttpContextContract) {

    const data = request.only(['title', 'content'])

    const post = await Post.create(data)

    return post

  }

}
