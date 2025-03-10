variable "mongodb_atlas_public_key" {
  type        = string
  description = "MongoDB Atlas Public API Key"
}

variable "mongodb_atlas_private_key" {
  type        = string
  description = "MongoDB Atlas Private API Key"
}

variable "mongodb_atlas_org_id" {
  type        = string
  description = "MongoDB Atlas Organization ID"
}

variable "render_api_key" {
  type        = string
  description = "Render API Key"
}

variable "secret_key" {
  type        = string
  description = "Secret Key for App"
  sensitive   = true
}