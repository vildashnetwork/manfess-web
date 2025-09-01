Manfess Web Repository

Welcome to Manfess Web! This repository contains the source code for the Manfess web project. This README provides a step-by-step guide for all team members to work efficiently without facing Git conflicts or permission issues.

Table of Contents

Repository URL

SSH Setup

Cloning the Repository

Branches

Daily Workflow

Pushing Changes

Pulling & Resolving Conflicts

Adding Team Members

Repository URL

We use SSH to avoid permission issues:

git@github.com:vildashnetwork/manfess-web.git

SSH Setup

Check if you already have an SSH key:

ls ~/.ssh/id_ed25519.pub


If not, generate a new key:

ssh-keygen -t ed25519 -C "your-email@example.com"


Copy your public key:

cat ~/.ssh/id_ed25519.pub


Add your SSH key to GitHub:

Go to GitHub SSH Settings
 → New SSH key → Paste your key → Add Key

Test the connection:

ssh -T git@github.com


You should see:

Hi <username>! You've successfully authenticated.

Cloning the Repository

Clone the repo using SSH:

git clone git@github.com:vildashnetwork/manfess-web.git
cd manfess-web

Branches

We use two main branches:

main – Production-ready, stable code.

developing – For ongoing development and features.

Create a feature branch for new tasks:

git checkout -b feature/my-feature

Daily Workflow

Update your local repository first:

git checkout developing
git pull origin developing


Work on your feature branch:

git checkout -b feature/<feature-name>


Stage your changes:

git add .


Commit your changes:

git commit -m "Short descriptive message"


Push your feature branch:

git push -u origin feature/<feature-name>

Pushing Changes
If there are no conflicts:
git checkout developing
git merge feature/<feature-name>
git push origin developing

If there are remote changes on the branch:
git pull origin developing --rebase
# resolve conflicts if any
git add .
git rebase --continue
git push origin developing


⚠️ If Git says non-fast-forward, use:

git push origin developing --force


(Use force push only if you rebased or resolved conflicts.)

Pulling & Resolving Conflicts

Pull remote changes before starting work:

git pull origin developing


If conflicts occur:

Open the conflicted file (e.g., README.md)

Look for <<<<<<<, =======, >>>>>>>

Edit the file to keep the correct content

Stage and continue:

git add <file>
git rebase --continue

Adding Team Members

Go to your repository → Settings → Manage access

Click Invite teams or people → Enter GitHub username → Set Role (Admin / Write / Read)

Members will get an email invite and can clone using SSH.

Notes & Best Practices

Always pull before push.

Work on feature branches.

Only merge to main after testing.

Resolve conflicts immediately.

Keep commit messages clear and concise.
