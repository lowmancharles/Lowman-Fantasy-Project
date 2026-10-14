# --- The everyday loop (90% of your day) ---
git status                      # See what's changed and what's staged
git add .                       # Stage all your changes for the next snapshot
git commit -m "message"         # Take a snapshot with a description
git push                        # Send your commits up to GitHub

# --- Seeing history ---
git log --oneline               # View your commit history, one line each

# --- Getting others' changes ---
git pull                        # Download and merge the latest from GitHub

# --- Branching ---
git switch -c branch-name       # Create a new branch and move onto it
git switch main                 # Switch back to your main branch
git branch                      # List your branches (star marks where you are)
git push -u origin branch-name  # Push a new branch to GitHub the first time