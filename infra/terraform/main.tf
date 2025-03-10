terraform {
  required_providers {
    mongodbatlas = {
      source  = "mongodb/mongodbatlas"
      version = "~> 1.6.0"
    }
  }
}

provider "mongodbatlas" {
  public_key  = var.mongodb_atlas_public_key
  private_key = var.mongodb_atlas_private_key
}

data "mongodbatlas_cluster" "existing_cluster" {
  project_id = var.mongodb_atlas_project_id
  name       = "crohncare-cluster"
}

output "mongodb_connection_uri" {
  value = data.mongodbatlas_cluster.existing_cluster.connection_strings[0]
  sensitive = true
}

# Deploy Backend to Render Using a `null_resource`
resource "null_resource" "deploy_render" {
  provisioner "local-exec" {
    command = <<EOT
      curl -X POST "https://api.render.com/deploy/srv-${var.render_service_id}?key=${var.render_api_key}"
    EOT
  }
}

output "backend_url" {
  value     = "https://crohncare-backend.onrender.com"
  sensitive = false
}