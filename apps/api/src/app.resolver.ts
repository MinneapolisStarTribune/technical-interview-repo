import { Query, Resolver } from '@nestjs/graphql';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class Hello {
  @Field()
  message: string;
}

@Resolver()
export class AppResolver {
  @Query(() => Hello)
  hello(): Hello {
    return { message: 'Hello from GraphQL!' };
  }
}
