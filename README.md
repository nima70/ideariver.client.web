# Adding Secrets to Your GitHub Repository

1. Go to your GitHub repository.
2. Click on **Settings** in the repository menu.
3. In the left sidebar, click on **Secrets and variables** under the **Security** section.
4. Click **Actions**.
5. Click the **New repository secret** button.
6. Add the following secrets:

   - **`AWS_ACCESS_KEY_ID`**: Your AWS access key ID.
   - **`AWS_SECRET_ACCESS_KEY`**: Your AWS secret access key.
   - **`AWS_REGION`**: The AWS region where your ECR repository is located.
   - **`AWS_ACCOUNT_ID`**: Your 12-digit AWS account ID.
   - **`ECR_REPOSITORY_NAME`**: The name of your ECR repository.
   - **`IMAGE_TAG`**: The tag for your Docker image.

### Example of Adding a Secret

For each secret:

1. Click **New repository secret**.
2. In the **Name** field, enter the name of the secret (e.g., `AWS_ACCESS_KEY_ID`).
3. In the **Secret** field, enter the corresponding value.
4. Click **Add secret**.

Repeat this process for each of the required secrets.

