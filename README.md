# E-commerce Web application with Microservices(MVP)

## SITE: www.test-app-jpj-prod.xyz (Since cost is invovled ,the site may be not available , please drop me a mail if live demo is needed)

## Approach
  This application is developed with the MERN Stack and implemented with a microservices architecture.Implemented with TDD Approach
  
## CI/CD Implemented
  Development Tools:
    - Skaffold 
    - Docker
    - K8
    - Git Actions
        -   Used to testing the services before any pull requests
        -   Used to deploy the commited and approved changes into the targetted cloud environment

## Features Implemented
  1. User should be able to register,login and logout to the application.
      - Implemented the above user story using jsonwebtoken and cookie sessions.
  2. User should be able to complete a purchase flow of an item
  3. User shoul be able to filter through the products
  4. User shoul be able to add items to the cart
  5. User should be able to complete a transaction


## Kubernetes Environment Secrets to be setup before deployment
  - MONGO_AUTH_URI
  - MONGO_PRODUCT_URI
  - MONGO_CART_URI
  - MONGO_ORDER_URI
  - JWT_KEY
  - STRIPE_KEY

## UI Homepage
<img width="1440" alt="Screenshot 2022-01-19 at 6 19 36 PM" src="https://user-images.githubusercontent.com/81481787/150134016-c70cf3f6-4892-4317-a760-76d107c4073e.png">

<img width="1440" alt="Screenshot 2022-01-19 at 6 20 44 PM" src="https://user-images.githubusercontent.com/81481787/150135495-01279074-0526-4b5a-8a2f-e22634524f9d.png">

<img width="1440" alt="Screenshot 2022-01-19 at 6 20 53 PM" src="https://user-images.githubusercontent.com/81481787/150135528-2fa39f3b-056d-4e71-8c81-9e0cc4d4d18f.png">

<img width="1440" alt="Screenshot 2022-01-19 at 6 29 47 PM" src="https://user-images.githubusercontent.com/81481787/150135535-e1798d6f-c6c6-4e48-94bb-bc27d39ec657.png">

## Register Page

<img width="1440" alt="Screenshot 2022-01-19 at 6 33 04 PM" src="https://user-images.githubusercontent.com/81481787/150136061-d6adcdcf-4f4e-43bc-9c28-f4cd95832748.png">

<img width="1440" alt="Screenshot 2022-01-19 at 6 33 19 PM" src="https://user-images.githubusercontent.com/81481787/150136073-59bd7507-5bb0-42ec-9d5c-7939af26be59.png">

## Login Page 

<img width="1440" alt="Screenshot 2022-01-19 at 6 36 10 PM" src="https://user-images.githubusercontent.com/81481787/150136587-b97e3bc6-15f6-4b71-bcf7-b6252ef0851b.png">

<img width="1440" alt="Screenshot 2022-01-19 at 6 36 32 PM" src="https://user-images.githubusercontent.com/81481787/150136599-211aacf9-5d46-4c6d-a7cd-74c3f4ea7160.png">

## Product List Page



