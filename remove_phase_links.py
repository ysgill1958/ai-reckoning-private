#!/usr/bin/env python3
"""
Script to remove all clickable phase header links from roadmaps.html
"""

import re

def remove_phase_links():
    file_path = "roadmaps.html"
    
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match clickable phase headers
    # This will match: <a href="phase-detail.html?phase=...">Phase X: Title →</a>
    pattern = r'<a href="phase-detail\.html\?phase=[^"]*"[^>]*>\s*([^→]*?)(?:\s*→)?\s*</a>'
    
    # Replace with just the phase title
    def replacement(match):
        phase_title = match.group(1).strip()
        return phase_title
    
    # Apply the replacement
    new_content = re.sub(pattern, replacement, content, flags=re.MULTILINE | re.DOTALL)
    
    # Count how many replacements were made
    original_matches = len(re.findall(pattern, content, flags=re.MULTILINE | re.DOTALL))
    
    # Write the updated file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Removed {original_matches} clickable phase header links")
    print("All phase headers are now informational only")

if __name__ == "__main__":
    remove_phase_links()