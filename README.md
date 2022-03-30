# E-commerce Web application with Microservices(MVP)

## SITE: www.test-app-jpj-prod.xyz (Since cost is invovled ,the site may be not available , please drop me a mail if live demo is needed)

## Approach

This application is developed with the MERN Stack and implemented with a microservices architecture.Implemented with TDD Approach

## CI/CD Implemented

Development Tools: - Skaffold - Docker - K8 - Git Actions - Used to testing the services before any pull requests - Used to deploy the commited and approved changes into the targetted cloud environment

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

## Pending Implementations

- Search Implementation
- Themeing
- Newsletter Integration

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

<img width="1440" alt="Screenshot 2022-01-19 at 6 37 33 PM" src="https://user-images.githubusercontent.com/81481787/150137250-7a15ebb1-a833-4b0d-aad7-7bbe7e437613.png">

### Selecting the Options

<img width="1440" alt="Screenshot 2022-01-19 at 6 37 48 PM" src="https://user-images.githubusercontent.com/81481787/150137298-59499184-ff4d-4f9c-b74e-2803759550a0.png">

### Item Added to Cart

<img width="1440" alt="Screenshot 2022-01-19 at 6 37 57 PM" src="https://user-images.githubusercontent.com/81481787/150137349-a1294db9-6676-4342-8260-28eec1c53a1e.png">

## Cart Page

<img width="1440" alt="Screenshot 2022-01-19 at 6 38 03 PM" src="https://user-images.githubusercontent.com/81481787/150137411-cc2fcad1-001d-4457-a53d-0c597c26647a.png">

## Payment

<img width="1440" alt="Screenshot 2022-01-19 at 6 38 21 PM" src="https://user-images.githubusercontent.com/81481787/150137447-b6fe4c1e-687d-4358-87b5-03c5290391db.png">

<img width="1440" alt="Screenshot 2022-01-19 at 6 38 39 PM" src="https://user-images.githubusercontent.com/81481787/150137462-0ce223e0-d95d-4280-a835-161b27a741ff.png">

<img width="1440" alt="Screenshot 2022-01-19 at 6 39 11 PM" src="https://user-images.githubusercontent.com/81481787/150137471-8263ee2f-b981-47c5-ade9-31b7b25e6532.png">

<img width="1440" alt="Screenshot 2022-01-19 at 6 39 25 PM" src="https://user-images.githubusercontent.com/81481787/150137483-415bb120-2606-49f8-a98f-e67354552c04.png">
