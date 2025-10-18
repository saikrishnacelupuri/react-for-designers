Github basics : 

Local branch: The version of code on your computer (main branch in your local Git repository)
Remote branch: The version on GitHub (main branch in the GitHub repository)
Simple diagram:

  Your Computer                   GitHub
  +--------------+                +---------------+
  | Local Repo   |    upstream    | Remote Repo   |
  | (main branch)|--------------->| (main branch) |
  |              |<---------------|               |
  +--------------+                +---------------+
       ↑                                ↑
       |                                |
  git push/pull                    git push/pull