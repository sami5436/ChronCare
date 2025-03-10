terraform {
  required_providers {
    mongodbatlas = {
      source  = "mongodb/mongodbatlas"
      version = "~> 1.6.0"
    }
    render = {
      source  = "getrender/render"
      version = "~> 0.0.6"
    }
  }
}

# Provider: MongoDB Atlas
provider "mongodbatlas" {
  public_key  = var.mongodb_atlas_public_key
  private_key = var.mongodb_atlas_private_key
}

# MongoDB Project
resource "mongodbatlas_project" "crohncare_project" {
  name   = "CrohnCareProject"
  org_id = var.mongodb_atlas_org_id
}

# MongoDB Cluster
resource "mongodbatlas_cluster" "crohncare_cluster" {
  project_id                 = mongodbatlas_project.crohncare_project.id
  name                        = "CrohnCareCluster"
  provider_name               = "AWS"
  backing_provider_name       = "AWS"
  provider_region_name        = "US_EAST_1"
  provider_instance_size_name = "M10"
  mongo_db_major_version      = "6.0"
}

# Provider: Render (for Backend Deployment)
provider "render" {
  api_key = var.render_api_key
}

# Deploy Backend to Render
resource "render_service" "crohncare_backend" {
  name       = "crohncare-backend"
  type       = "web_service"
  repo       = "https://github.com/sami5436/crohncare/backend"
  branch     = "main"
  env        = "docker"
  region     = "oregon"  
  plan       = "free"
  dockerfile = "backend/Dockerfile"

  env_vars = {
    "MONGO_URI"  = mongodbatlas_cluster.crohncare_cluster.connection_strings[0]
    "SECRET_KEY" = var.secret_key
  }
}

# Output Backend URL
output "backend_url" {
  value     = render_service.crohncare_backend.url
  sensitive = true
}