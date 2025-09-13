#!/usr/bin/env python3
"""
Script to identify missing component links from roadmaps.html
"""

import re

def find_missing_components():
    # Read roadmaps.html to get all component links
    with open("roadmaps.html", 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all component links
    component_pattern = r'component-detail\.html\?component=([^"&]*)'
    component_ids = re.findall(component_pattern, content)
    
    # Remove duplicates and sort
    unique_components = sorted(set(component_ids))
    
    print(f"Found {len(unique_components)} unique component references in roadmaps.html")
    print("\nComponent list:")
    
    # Read component-detail.html to check which components are defined
    with open("component-detail.html", 'r', encoding='utf-8') as f:
        component_detail_content = f.read()
    
    # Find all defined components in componentData
    # Look for the main componentData section (not duplicated ones)
    start_marker = "const componentData = {"
    
    # Find ALL occurrences of the pattern
    component_pattern = r"'([^']+)'\s*:\s*\{"
    all_matches = re.findall(component_pattern, component_detail_content)
    
    # Remove duplicates and get unique components
    defined_components = set(all_matches)
    
    print(f"Found {len(defined_components)} defined components in componentData")
    
    missing_components = []
    working_components = []
    
    print("\n=== COMPONENT STATUS ===")
    for component_id in unique_components:
        if component_id in defined_components:
            working_components.append(component_id)
            print(f"✅ {component_id} - Defined in componentData")
        else:
            missing_components.append(component_id)
            print(f"❌ {component_id} - NOT FOUND in componentData")
    
    print(f"\n=== SUMMARY ===")
    print(f"✅ Working components: {len(working_components)}")
    print(f"❌ Missing components: {len(missing_components)}")
    
    if missing_components:
        print(f"\n=== MISSING COMPONENTS ===")
        for component in missing_components:
            print(f"- {component}")
            
        # Save missing components to file
        with open("missing_components.txt", 'w') as f:
            for component in missing_components:
                f.write(f"{component}\n")
        print(f"\nMissing components saved to missing_components.txt")
    
    if defined_components:
        print(f"\n=== DEFINED COMPONENTS ===")
        for component in sorted(defined_components):
            print(f"+ {component}")
    
    return missing_components, working_components

if __name__ == "__main__":
    find_missing_components()