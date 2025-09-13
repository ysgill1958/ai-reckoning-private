#!/usr/bin/env python3
"""
Script to remove duplicate component definitions from component-detail.html
"""

def fix_duplicates():
    file_path = "component-detail.html"
    
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the duplicate section start marker
    duplicate_start = "// Supply Chain & Logistics Components"
    
    # Find where the duplicate section starts
    duplicate_start_pos = content.find(duplicate_start)
    if duplicate_start_pos == -1:
        print("No duplicate section found")
        return
    
    # Find the line before the duplicate section starts
    lines = content.split('\n')
    duplicate_line = None
    for i, line in enumerate(lines):
        if duplicate_start in line:
            duplicate_line = i
            break
    
    if duplicate_line is None:
        print("Could not find duplicate section")
        return
    
    print(f"Found duplicate section starting at line {duplicate_line + 1}")
    
    # Find where the componentData ends properly (should be "};" followed by JavaScript functions)
    # Look for the pattern "        };" followed by "        // Get component from URL parameters"
    proper_end_pattern = "        };\n\n        // Get component from URL parameters"
    proper_end_pos = content.find(proper_end_pattern)
    
    if proper_end_pos == -1:
        print("Could not find proper end pattern")
        return
    
    # Calculate the lines to keep
    lines_before_duplicate = lines[:duplicate_line-1]  # Keep lines before the duplicate section
    
    # Find the proper ending lines
    lines_after_proper_end = []
    found_proper_end = False
    for i, line in enumerate(lines):
        if "        };" in line and not found_proper_end:
            # Check if the next non-empty line contains function definition
            for j in range(i+1, len(lines)):
                if lines[j].strip():
                    if "// Get component from URL parameters" in lines[j] or "function getComponentFromURL" in lines[j]:
                        lines_after_proper_end = lines[i:]
                        found_proper_end = True
                        break
                    break
        if found_proper_end:
            break
    
    if not found_proper_end:
        print("Could not find proper ending")
        return
    
    # Reconstruct the file
    # Add proper closing for the component before duplicates
    lines_before_duplicate.append("            }")
    lines_before_duplicate.append("        };")
    lines_before_duplicate.append("")
    
    # Combine everything
    new_lines = lines_before_duplicate + lines_after_proper_end
    new_content = '\n'.join(new_lines)
    
    # Write the fixed file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Fixed duplicates! Removed {len(lines) - len(new_lines)} duplicate lines")
    print(f"Original file: {len(lines)} lines")
    print(f"Fixed file: {len(new_lines)} lines")

if __name__ == "__main__":
    fix_duplicates()