# E-commerce_MERN
  
  This application is created with the MERN Stack.
    Adheres to Responsive Approach
    Implemented with TDD Approach
    CI/CD Implemented : 
        Development Tools:
            Skaffold 
            Docker
            K8
            Git Actions

  Features Implemented:
    
  Kubernetes Environment Secrets to be setup before deployment:
    MONGO_AUTH_URI
    MONGO_PRODUCT_URI
    MONGO_CART_URI
    MONGO_ORDER_URI
  
  
  CI/CD:
    This application follows the microservices architecture.
    The below Services are containerized using docker,k8 and skaffold(for development , ease to use with GCP)

    Git Actions :
        Used to testing the services before any pull requests
        Used to deploy the commited and approved changes into the targetted cloud environment
        
   
 UI Homepage
